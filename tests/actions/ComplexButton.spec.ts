import {test, expect} from '@playwright/test'

test('Complex button test - Wrong Approach  ', async ({page}) => {
    
    //go the page where the button is located
    await page.goto('ComplexButton.html')

    const button = page.locator('button')

    //sofet assertions so that the test wont stop after first error and we want to continue the test running
    const isVisible = await button.isVisible()
    expect.soft(isVisible).toBe(true)

    const isEnabled = await button.isEnabled()
    expect.soft(isEnabled).toBe(true)

    await button.click()
})

test('Complex button test - Wrong Approach - with good results ', async ({page}) => {
    
    //go the page where the button is located
    await page.goto('ComplexButton.html')

    const button = page.locator('button')

     await button.click()

    //soft assertions so that the test wont stop after first error and we want to continue the test running
    const isVisible = await button.isVisible()
    expect.soft(isVisible).toBe(true)

    const isEnabled = await button.isEnabled()
    expect.soft(isEnabled).toBe(true)
})


test('Complex button test - Good Approach ', async ({page}) => {
    
    //go the page where the button is located
    await page.goto('ComplexButton.html')

    const button = page.locator('button')

    await expect(button).toBeVisible() //assert the button is visible before clicking
    
    await expect(button).toBeEnabled() //assert the button is enabled before clicking

    await button.click() //click the button after asserting it is visible and enabled

    await expect(page.locator('#myLabel')).toBeVisible() //assert the label is visible after clicking the button
})

