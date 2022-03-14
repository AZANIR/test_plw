import { test, expect } from "@playwright/test";

test.use({ 
  locale: 'en-US',
  geolocation:{longitude: 2.2990125,latitude: 48.8598277},
  permissions:['geolocation'],
  video: 'on'
});

test.describe("two tests", () => {
  
  test("basic test", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await page.locator("text=Get started").click();
    await expect(page).toHaveTitle(/Getting started/);
  });

  test("test", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await page.click('[name="q"]');
    await page.fill('[name="q"]', "playwright");
    await Promise.all([
      page.waitForNavigation(/*{ url: 'https://www.google.com/search?q=playwright&source=hp&ei=uYbQYcKqCPCNlwTK565A&iflsig=ALs-wAMAAAAAYdCUyR1_XZLjm9ZfqTTNLf7KbIqfPKtw&ved=0ahUKEwiC69ndgZH1AhXwxoUKHcqzCwgQ4dUDCAg&uact=5&oq=playwright&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOggIABCABBCxAzoLCAAQgAQQsQMQgwE6CwguEIAEEMcBEKMCOgUILhCABDoICC4QgAQQsQNQ6QZYtDpgmU5oAXAAeACAAX6IAfUHkgEDNi40mAEAoAEBsAEA&sclient=gws-wiz' }*/),
      page.press('[name="q"]', "Enter"),
    ]);
    await page.click("text=https://playwright.dev");
    await expect(page).toHaveURL("https://playwright.dev/");
  });
});
