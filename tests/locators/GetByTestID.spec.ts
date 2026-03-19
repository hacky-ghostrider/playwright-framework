import  {expect, test } from '@playwright/test';

test('Get By test id - accept cookies ', async ({ page }) => {
    await page.goto('')

    const acceptCookiesButton = page.getByTestId('accept-cookies')

    await acceptCookiesButton.click()
    await expect(acceptCookiesButton).toBeHidden()
})