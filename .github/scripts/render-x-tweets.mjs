import fs from "fs";
import path from "path";
import { chromium } from "playwright";

const username = process.env.X_USERNAME || "devops_sre18";
const maxTweets = Number(process.env.MAX_TWEETS || 3);

// ---- Simple RSS source (no X API key) ----
// Many people use rss.app / nitter / other RSS bridges.
// Easiest: create an RSS feed for your X profile using rss.app (or similar),
// then paste that feed URL here.
const RSS_FEED_URL = process.env.X_RSS_FEED_URL || ""; // recommended to set in repo secrets or env

if (!RSS_FEED_URL) {
  console.error("Missing X_RSS_FEED_URL. Provide an RSS feed URL for your X timeline.");
  console.error("Example: use rss.app to generate a feed for https://x.com/" + username);
  process.exit(1);
}

const outDir = path.join("assets", "tweets");
fs.mkdirSync(outDir, { recursive: true });

async function fetchTweetLinksFromRss(rssUrl, limit) {
  const res = await fetch(rssUrl);
  const xml = await res.text();

  // Extract first N tweet links
  const links = [];
  const linkRegex = /<link>(.*?)<\/link>/g;
  let match;
  while ((match = linkRegex.exec(xml)) && links.length < limit + 2) {
    const url = match[1].trim();
    // RSS feeds often include channel link first; filter to x.com links
    if (url.includes("x.com/") && url.includes("/status/")) links.push(url);
  }
  return links.slice(0, limit);
}

function updateReadmeWithImages(imagePaths) {
  const readme = fs.readFileSync("README.md", "utf8");
  const start = "<!--START_SECTION:TWEETS_IMG-->";
  const end = "<!--END_SECTION:TWEETS_IMG-->";

  const block =
    imagePaths.length === 0
      ? "\n_No recent tweets found._\n"
      : "\n" +
        imagePaths
          .map(
            (p) =>
              `<p align="center"><img src="${p}" alt="Latest tweet" width="600" /></p>`
          )
          .join("\n") +
        "\n";

  const updated = readme.replace(
    new RegExp(`${start}[\\s\\S]*?${end}`),
    `${start}${block}${end}`
  );

  fs.writeFileSync("README.md", updated, "utf8");
}

(async () => {
  const tweetLinks = await fetchTweetLinksFromRss(RSS_FEED_URL, maxTweets);

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 900, height: 1200 },
  });

  const saved = [];

  for (let i = 0; i < tweetLinks.length; i++) {
    const url = tweetLinks[i];

    // Use publish.twitter.com embed page for a consistent card render
    // (still no JS inside README; we screenshot it here in CI)
    const embedUrl =
      "https://publish.twitter.com/?query=" +
      encodeURIComponent(url) +
      "&widget=Tweet";

    await page.goto(embedUrl, { waitUntil: "networkidle" });

    // Tweet is inside an iframe on publish page; screenshot the iframe
    const frame = page.frameLocator("iframe");
    const tweet = frame.locator("article").first();

    // Wait for tweet content
    await tweet.waitFor({ timeout: 30000 });

    const filePath = path.join(outDir, `tweet-${i + 1}.png`);
    await tweet.screenshot({ path: filePath });

    saved.push(filePath.replace(/\\/g, "/"));
  }

  await browser.close();

  updateReadmeWithImages(saved);
  console.log("Updated README with tweet images:", saved);
})();