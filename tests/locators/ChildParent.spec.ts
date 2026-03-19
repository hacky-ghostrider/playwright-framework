import {test, expect} from '@playwright/test'

test('Child locators', async ({page}) => {

    await page.goto('')

    //recommended way of suing locators is getByRole()
    const serviceList = page.getByRole('list')
    const serviceItems = await serviceList.getByRole('listitem').all()
    expect(serviceItems.length).toBeGreaterThan(0)

    //with CSS locators :- child parent selection
    const servieItems2 = await page.locator('ul > li').all()
    //simplly print the item in the unordered-list
    for(const item of servieItems2) {
        console.log(await item.textContent())
    }
})

test('Parent locators', async ({page}) => {
        await page.goto('')

    const acceptCookiesButton = page.getByTestId('accept-cookies')
    
    //now the interesting part is we need to select the parent cookie banner
    const acceptCookieBanner = acceptCookiesButton.locator('..') //moving to parent 

    await acceptCookiesButton.click()
    await expect(acceptCookieBanner).toBeHidden()
})

test('Nth element locator - buttons', async ({page}) => {
    await page.goto('')

    const buttons = page.getByRole('button') // will get all the button on the web page 
    const acceptCookiesButton = buttons.first()
    const declineCookiesButton = buttons.last()

    await acceptCookiesButton.click()
    await expect(declineCookiesButton).not.toBeVisible()

})


test('Nth element locator - list items', async ({page}) => {
    await page.goto('')

    const listItems = page.getByRole('listitem')
    const thirdItem = listItems.nth(2) // 3rditem print indexing starts from 0 
    
    //for printing the 3rd item on the list 
    console.log(await thirdItem.textContent())

})