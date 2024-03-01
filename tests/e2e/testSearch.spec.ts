import { expect, test } from "@playwright/test";

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:8000/');
    await page.getByLabel('Login').click();
    await page.getByLabel('Command input').click();
})

test('search too many args inputted, brief mode', async ({ page }) => {
  await page.getByLabel('Command input').fill('load data/simpleData.csv');
    await page.getByRole('button', { name: 'Submit' }).click();
    
    await page.getByLabel('Command input').click();
    await page.getByLabel('Command input').fill('search ');
  await page.getByRole('button', {name: 'Submit'}).click();

  const firstChild = await page.evaluate(() => {
    const history = document.querySelector('.repl-history');
    return history?.children[1]?.textContent;
  });
  expect(firstChild).toEqual("You have inputted too many arguments");
})