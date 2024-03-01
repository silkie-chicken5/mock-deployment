import { expect, test } from "@playwright/test";

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:8000/');
})

test('on mode inputted, command please specify a supported mode', async ({ page }) => {
  await page.getByLabel('Login').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('mode');
  await page.getByRole('button', {name: 'Submit'}).click();

  const firstChild = await page.evaluate(() => {
    const history = document.querySelector('.repl-history');
    return history?.children[0]?.textContent;
  });
  expect(firstChild).toEqual("Command not recognized");
})

test('on mode brief inputted, command already in mode brief', async ({ page }) => {
  await page.getByLabel('Login').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('mode brief');
  await page.getByRole('button', {name: 'Submit'}).click();

  const firstChild = await page.evaluate(() => {
    const history = document.querySelector('.repl-history');
    return history?.children[0]?.textContent;
  });
  expect(firstChild).toEqual("Already in mode brief.");
})

test('on mode verbose inputted, command now in mode verbose', async ({ page }) => {
  await page.getByLabel('Login').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('mode verbose');
  await page.getByRole('button', {name: 'Submit'}).click();

  const firstChild = await page.evaluate(() => {
    const history = document.querySelector('.repl-history');
    return history?.children[0]?.textContent;
  });
  expect(firstChild).toEqual("Output: Now in mode verbose.");

  const secondChild = await page.evaluate(() => {
    const history = document.querySelector('.repl-history');
    return history?.children[0]?.textContent;
  });
  expect(secondChild).toEqual("Command: mode verbose.");
})