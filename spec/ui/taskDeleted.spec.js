const db = require('../../src/persistence');
const puppeteer = require('puppeteer');

describe('delete item from UI', () => {
  test('It should delete item from UI', async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.goto('http://localhost:3000/');
    await expect(page.title()).resolves.toMatch('Todo App');

    const deleteButton = '#removeBt'
    await page.waitForSelector(deleteButton);
    await page.focus(deleteButton)        

    await db.init();


    await browser.close();
  });
});
