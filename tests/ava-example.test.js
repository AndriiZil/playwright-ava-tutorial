const { chromium } = require('playwright');
const test = require('ava').default;
const browserPromise = chromium.launch();

async function pageMacro(t, callBack) {
  const browser = await browserPromise;
  const page = await browser.newPage();
  try {
    await callBack(t, page);
  } finally {
    await page.close();
  }
}

test('Ava integration with playwright', pageMacro, async (t, page) => {
  await page.goto('https://www.example.com');
  t.is(await page.title(), 'Example Domain')
})
