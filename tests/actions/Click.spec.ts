import {test, expect} from '@playwright/test'


//Remebeer if we want to clikc and element in a web page  then : 1. First locat eht he elements 2. then click on it or any actions
test('Click actions ', async ({page}) => { 

    await page.goto('FeedBackForm.html')

    const submitButton = page.getByRole('button', {
        name: 'Submit'
    })
    await submitButton.click() //normal click is the left button by default 
})

test('Click actions with Options - Right Click  ', async ({page}) => { 

    await page.goto('FeedBackForm.html')

    const submitButton = page.getByRole('button', {
        name: 'Submit'
    })
    await submitButton.click({
        button:'right',
        position: {
            x: 10,
            y: 10
        }
    }) 

})

test('Click actions with Key Down  ', async ({page}) => { 

    await page.goto('FeedBackForm.html')

    const improvementInput = page.getByLabel('Areas for Improvement')
   
    const firstOption = improvementInput.getByRole('option').first()
    const secondOption = improvementInput.getByRole('option').nth(1)

    await firstOption.click() //click on the first option

    await expect(improvementInput).toHaveValue('content') //assert the value of the input field after clicking the first option

    await secondOption.click({
        modifiers: [ 'Control']
    })

    await expect(improvementInput).toHaveValues(['content', 'presentation'])
})
