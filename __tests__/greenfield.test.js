//Reviews Tests

// import reviewsMeta from '../client/src/components/reviews/ReviewsMeta';

// test('adds 1 + 2 to equal 3', () => {
//   expect(a().toBe(3));
// });

import faker from "faker";
import puppeteer from "puppeteer";

const APP = "localhost:3000";

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});
afterAll(() => {
  browser.close();
});

describe("Main", () => {
  test("access the page", async () => {
    await page.goto(APP);
  }, 4000);

  test("assert that <title> is correct", async () => {
    const title = await page.title();
    expect(title).toBe(
      "Project Greenfield"
    );
  });


  test("correct page name", async () => {
    const pageName = await page.$eval("[class=siteName]", el => el.textContent);
    expect(pageName).toEqual("BuyThisStuff.com");
  });

});
