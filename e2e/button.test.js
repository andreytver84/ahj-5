import puppeteer from 'puppeteer';

describe('Form test', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
    });

    page = await browser.newPage();
  });

  test('form should render', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.page-title');
  });

  test('form should add class valid if valid', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.button-block');
   
    const btn = await page.$('.btn-popover');    
    await btn.click();

    await page.waitForSelector('.popover');
  });


  afterEach(async () => {
    await browser.close();
  });
});