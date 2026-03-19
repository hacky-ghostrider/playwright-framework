import {test, expect} from '@playwright/test';

test('CSS selectors', async ({ page }) => {

    await page.goto('')

    const welcomeMessage = page.locator('header').locator('h1')
    const welcomeMessageText = await welcomeMessage.textContent()
    expect(welcomeMessageText).toContain('Welcome')

    //another way of locating locatrs h1
    const welcomeMessage2 = page.locator('header > h1 ')
    const welcomeMessageText2 = await welcomeMessage2.textContent()
    expect(welcomeMessageText2).toContain('Welcome')

    //select by css id:
    const cookieBanner = page.locator('#cookie-banner')
    await expect(cookieBanner).toBeVisible()

    //selectby CSS class:
    const acceptButton = page.locator('.accept')
    acceptButton.click()
    await expect(cookieBanner).toBeHidden()
})