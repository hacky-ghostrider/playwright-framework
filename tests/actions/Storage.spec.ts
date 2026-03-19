import {test, expect} from '@playwright/test'

test('Saving Storage - correct load',  async({ page }) => { 

    await  page.goto('FeedBackForm.html')

    const someName = 'Test'

    //action 
    const nameField = page.getByRole('textbox', {name: 'name'})
    await nameField.fill(someName)

    await page.getByRole('button', {
        name: 'Save Progress'
    }).click()

    await page.reload()

    await expect(nameField).toHaveValue(someName)
})