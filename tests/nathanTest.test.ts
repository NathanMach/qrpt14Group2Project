import { starCitizen } from "../nathanPage";
const page = new starCitizen()
const fs = require('fs')

test('open account', async () => {
    await page.signIn()
})

test('add to cart', async () => {
    await page.addToCart()
    await page.driver.quit()
})
