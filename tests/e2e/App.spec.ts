import { expect, test } from "@playwright/test";

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:8000/');
  })

test('on page load, i see a login button', async ({ page }) => {
  await expect(page.getByLabel('Login')).toBeVisible()
})

test('on page load and login, i see a sign out button', async ({ page }) => {
  // await page.goto('http://localhost:8000/');
  await page.getByLabel('Login').click();

  await expect(page.getByLabel('Sign Out')).toBeVisible()
});

test('on page load, i dont see the input box until login', async ({ page }) => {
  // Notice: http, not https! Our front-end is not set up for HTTPs.
  // await page.goto('http://localhost:8000/');
  await expect(page.getByLabel('Sign Out')).not.toBeVisible()
  await expect(page.getByLabel('Command input')).not.toBeVisible()
  
  // click the login button
  await page.getByLabel('Login').click();
  await expect(page.getByLabel('Sign Out')).toBeVisible()
  await expect(page.getByLabel('Command input')).toBeVisible()
})

test('on page load, login, and sign out, i dont see the input box', async ({ page }) => {
  // await page.goto('http://localhost:8000/');
  await page.getByLabel('Login').click();
  await page.getByLabel('Sign out').click();

  await expect(page.getByLabel('CommandInput')).not.toBeVisible()
  await expect(page.getByLabel('Sign Out')).not.toBeVisible()
  await expect(page.getByLabel('Login')).toBeVisible()
});

test('after I type into the input box, its text changes', async ({ page }) => {
  // Step 1: Navigate to a URL
  // await page.goto('http://localhost:8000/');
  await page.getByLabel('Login').click();

  // Step 2: Interact with the page
  // Locate the element you are looking for
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('banana');

  // Step 3: Assert something about the page
  // Assertions are done by using the expect() function
  const mock_input = `banana`
  await expect(page.getByLabel('Command input')).toHaveValue(mock_input)
});

test('on page load, i see a button', async ({ page }) => {
  // await page.goto('http://localhost:8000/');
  await page.getByLabel('Login').click();

  await expect(page.getByRole('button', {name: 'Submit'})).toBeVisible()
});

test('after I click the button, my command gets pushed', async ({ page }) => {
  // await page.goto('http://localhost:8000/');
  await page.getByLabel('Login').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('banana');
  await page.getByRole('button', {name: 'Submit'}).click();

  const firstChild = await page.evaluate(() => {
    const history = document.querySelector('.repl-history');
    return history?.children[0]?.textContent;
  });
  expect(firstChild).toEqual("Command not recognized");
});

test('on page load, login, command push, and sign out, i dont see the input box', async ({ page }) => {
 // await page.goto('http://localhost:8000/');
  await page.getByLabel('Login').click();
  await page.getByLabel('Command input').click();
  await page.getByLabel('Command input').fill('banana');
  await page.getByRole('button', {name: 'Submit'}).click();
  await page.getByLabel('Sign out').click();

  await expect(page.getByLabel('CommandInput')).not.toBeVisible()
  await expect(page.getByLabel('Sign Out')).not.toBeVisible()
  await expect(page.getByLabel('Login')).toBeVisible()
});