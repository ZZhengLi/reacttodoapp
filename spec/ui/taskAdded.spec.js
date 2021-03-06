const fs = require('fs');
const puppeteer = require('puppeteer');
const db = require('../../src/persistence');

describe('Add new item from UI', () => {
  test('It should add new item from UI', async () => {
    

    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.goto('http://localhost:3000/');
    await expect(page.title()).resolves.toMatch('Todo App');

    const fillSelector = '#root > div > div > div > form > div > input'
    await page.waitForSelector(fillSelector);
    await page.focus(fillSelector)        
    await page.keyboard.type('Test Item from Puppeteer')
    await page.keyboard.type(String.fromCharCode(13));

    await page.waitForSelector("#addItem");

    await db.init();

    await browser.close();
  });
});
