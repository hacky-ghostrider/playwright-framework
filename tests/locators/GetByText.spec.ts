import  {test, expect } from '@playwright/test';

test('Get by text practice', async ({ page }) => {

    //since we have already set the baseURL in the config file, we can use relative URL here so we add the FeedBackForm.html after the baseUrl
    await page.goto('FeedBackForm.html')

    const title = page.getByText('Feedback Form').first();
    await expect (title).toBeVisible();
})

test('Get by text practice - error messages', async ({ page }) => {

    await page.goto('FeedBackForm.html')

    const emailValidationMessage = page.getByText('Invalid email format')
    await expect(emailValidationMessage).toBeHidden();

    await page.getByRole('textbox', {
        name: 'email'
    }).fill('john@email')
    await expect(emailValidationMessage).toBeVisible();

    await page.getByRole('textbox', {
        name: 'email'
    }).fill('john@email.com')
    await expect(emailValidationMessage).toBeHidden();
 })

 
test('Get by text practice - hidden Elements', async ({ page }) => {
    await page.goto('FeedBackForm.html')

    const hiddenButton = page.getByText('Hidden feature')
    await expect(hiddenButton).toBeHidden();

    const hiddenButtonText = await hiddenButton.textContent();
    console.log(hiddenButtonText)

    //now lets try the same with getByRole()
    const hiddenButtonWithRole = page.getByRole('button', {
        name: 'Hidden feature'
    })
    const hiddenButtonWithRoleText = await hiddenButtonWithRole.textContent()
 })
