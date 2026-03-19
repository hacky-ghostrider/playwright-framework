import {test, expect} from '@playwright/test'

test('Click actions with Key Down  ', async ({page}) => { 

    await page.goto('FeedBackForm.html')

    const checkBox = page.getByRole('checkbox', {name: 'I agree to the site'})

    await checkBox.check()
    await checkBox.uncheck()
    
    //aassertions wheter the checkbox is uncehcked or not 
    await expect(checkBox).not.toBeChecked()
})

test('Selection actions  ', async ({page}) => { 
    await page.goto('FeedBackForm.html')

    const improvementInput = page.getByLabel('Areas for Improvement')

    //selectOptions we can have argumentsi.e. contents which are there in the form [ values : content, presentation, Timing, others] 
    //single option
    await improvementInput.selectOption('content')

    //asserting single value
    await expect(improvementInput).toHaveValue('content')


    /* written by author :- Rocky
    
    selecting mulitple options we should use Array
    await improvementInput.selectOption(['content','others'])

    asserting multiple values
    await expect(improvementInput).toHaveValues(['content','others'])
    */

    //written by Author :- Alex : mutliples values
    improvementInput.selectOption(['presentation','timing'])

    await expect(improvementInput).toHaveValues(['presentation','timing'])

})
