import {test, expect} from '@playwright/test'

    test.use({
        storageState: {
            cookies: [], //we dont want to set the cookies so empty array
            origins: [{
                origin: 'http://localhost:5002/',
                localStorage: [{
                        name: 'name',
                        value: 'Test'
                }]
            }] 
        }
 })

 test('Storage - load from configuration', async ({ page }) => {
    await page.goto('FeedBackForm.html')

    const nameField = page.getByRole('textbox', {name: 'name'})

    await expect(nameField).toHaveValue('Test')

 })

 test('Storage - configure inside the test', async ({ page }) => {
    await page.goto('FeedBackForm.html')

    //callback function evaluate and localStorage is provided by the web-Browser itself not by playwright
    await page.evaluate(() =>{
        localStorage.setItem('email', 'Test@gmail.com')
    })

    //we need ot relaod the page inorder to be working 
    await page.reload()

    const emailField = page.getByRole('textbox', {name: 'email'})

    await expect(emailField).toHaveValue('Test@gmail.com')

 })