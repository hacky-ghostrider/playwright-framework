import  {test } from '@playwright/test';

test('Get By Label practice - inside forms', async ({ page }) => {
    await page.goto('FeedBackForm.html')

    const name =  page.getByLabel('name')

    await name.fill('John')

    const email =  page.getByLabel('email')

    await email.fill('john@email.com')

    await page.pause()
})