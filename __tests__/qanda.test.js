import faker from 'faker';
import puppeteer from 'puppeteer';

const APP = 'localhost:3000';

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

describe('QA', () => {
  test('access the page', async () => {
    await page.goto(APP);
  });

  test('change page', async () => {
    await page.click('[id="findItem"]', { delay: 100 });
    await page.keyboard.type('7', { delay: 100 });
    await page.click('[form="findItem"]');
    const pageName = await page.$eval('[class=siteName]', el => el.textContent);
    expect(pageName).toEqual('BuyThisStuff.com');
  });

  test('qa part exists', async () => {
    const name = await page.$eval('[class=QA]', el => el.textContent);
  });

  test('gives correct rating', async () => {
    const rating = await page.$eval(
      '[class=review-average]',
      el => el.textContent
    );
    expect(rating).toEqual('3.4');
  });
});
