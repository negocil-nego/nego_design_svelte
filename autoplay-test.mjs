import { chromium } from "playwright";

const URL = process.env.TARGET_URL ?? "http://localhost:5175/autoplay-debug";

const browser = await chromium.launch({ channel: "msedge", headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const logs = [];
page.on("pageerror", (e) => logs.push(`[pageerror] ${e.message}`));
page.on("load", () => logs.push("[load]"));

await page.addInitScript(() => {
  window.__calls = [];
  const orig = Element.prototype.scrollTo;
  Element.prototype.scrollTo = function (...args) {
    const a = args[0];
    window.__calls.push({
      left: typeof a === "object" ? a.left : args[0],
      at: Math.round(performance.now()),
    });
    return orig.apply(this, args);
  };
});

async function safeEval(fn) {
  try {
    return await page.evaluate(fn);
  } catch {
    try {
      await page.waitForSelector('[data-slot="carousel-content"]', { timeout: 15000 });
    } catch {}
    return null;
  }
}

async function phase(label, ms) {
  const start = Date.now();
  let last = null;
  let lost = 0;
  while (Date.now() - start < ms) {
    const s = await safeEval(() => {
      const el = document.querySelector('[data-slot="carousel-content"] > div');
      return el
        ? {
            left: Math.round(el.scrollLeft),
            max: el.scrollWidth - el.clientWidth,
            calls: (window.__calls || []).map((c) => `${c.left}@${c.at}`),
          }
        : null;
    });
    if (s) last = s;
    else lost++;
    await page.waitForTimeout(500);
  }
  console.log(`PHASE ${label}: last=${JSON.stringify(last)} lostSamples=${lost}`);
  return last;
}

await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForSelector('[data-slot="carousel-content"]', { timeout: 30000 });

const p1 = await phase("autoplay 16s", 16000);
const before = p1?.calls?.length ?? 0;

// simulate user interaction (stopOnInteraction: true -> autoplay must stop)
await page.evaluate(() => {
  const el = document.querySelector('[data-slot="carousel-content"] > div');
  el.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true }));
});
console.log("DISPATCHED pointerdown");

const p2 = await phase("after interaction 12s", 12000);
const after = p2?.calls?.length ?? 0;

console.log(`RESULT ticksBefore=${before} ticksAfter=${after}`);
console.log("LOGS:\n" + logs.slice(0, 40).join("\n"));
await browser.close();
