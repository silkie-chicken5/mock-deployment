import { expect, test } from "@playwright/test";

test('on page load, i see a login button', async ({ page }) => {
  await page.goto('http://localhost:8000/');
  await expect(page.getByLabel('Login')).toBeVisible()
})