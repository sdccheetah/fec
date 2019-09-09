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
  test("Can access the page", async () => {
    await page.goto(APP);
  }, 4000);
});
