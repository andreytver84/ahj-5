import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Testing validate functionality', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      headless: true, // show gui
      slowMo: 250,
      devtools: false, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  describe('Testing button popover', () => {
    test('page should render', async () => {
      await page.goto(baseUrl);
  
      await page.waitForSelector('.page-title');
    });
  
    test('popover should add class popover', async () => {
      await page.goto(baseUrl);
  
      await page.waitForSelector('.button-block');
     
      const btn = await page.$('.btn-popover');    
      await btn.click();
  
      await page.waitForSelector('.popover');
    });
  });
});