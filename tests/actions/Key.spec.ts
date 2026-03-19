import {test, expect } from '@playwright/test'

test('Fill actions ', async ({page}) => {

     //goto the feedback form
     await page.goto('FeedBackForm.html')

     //acquire the name field wiaht a locator 
     const nameField = page.getByRole('textbox', {name: 'name'})

     await nameField.fill('Test')

     //.fill() in playwrifht will clear the textbox first and then fill/type the new text
     await nameField.fill('John')

     // type action is deprecated 
     await nameField.type('Alex')

     //playwright support individual keborad press 
     //Remeber playwright can only input one charcter not the sequence 
     await nameField.press('A')

})


test('Key actions ', async ({page}) => {

     //goto the feedback form
     await page.goto('FeedBackForm.html')

     //acquire the name field wiaht a locator 
     const nameField = page.getByRole('textbox', {name: 'name'})

     await nameField.fill('Test')

     //checking for the Esc-Key press clears the text-field 
     await page.keyboard.down('Escape')

     await expect(nameField).toBeEmpty()
     
})