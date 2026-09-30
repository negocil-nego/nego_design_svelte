import { chromium } from "playwright";

const BASE = process.env.BASE_URL ?? "http://localhost:5175";

const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));

async function measure(path) {
  await page.goto(`${BASE}${path}`, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector("article", { timeout: 30000 });
  await page.waitForTimeout(1500);
  return await page.evaluate(() => {
    return [...document.querySelectorAll("article")].map((a) => {
      const wrap = a.querySelector(":scope > .flex-1");
      const thumb = wrap?.firstElementChild;
      const ar = a.getBoundingClientRect();
      const wr = wrap?.getBoundingClientRect();
      const tr = thumb?.getBoundingClientRect();
      return {
        top: Math.round(ar.top),
        articleH: Math.round(ar.height),
        wrapH: wr ? Math.round(wr.height) : null,
        thumbH: tr ? Math.round(tr.height) : null,
        freeUsed: wr && tr ? Math.round(wr.height - tr.height) : null,
        gapBelow: wr ? Math.round(ar.bottom - wr.bottom) : null,
        fills: wr ? Math.round(ar.bottom - wr.bottom) < 60 : null,
      };
    });
  });
}

for (const path of ["/card/media", "/carousel/grid/media", "/carousel/media"]) {
  const data = await measure(path);
  console.log(`\n=== ${path} ===`);
  data.forEach((d, i) => console.log(i, JSON.stringify(d)));
}
console.log("\nERRORS:", errors.slice(0, 5));
await browser.close();
