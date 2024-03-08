import { starCitizen } from "../nathanPage";
const page = new starCitizen()
const fs = require('fs')

test('open account', async () => {
    await page.signIn()
    await page.driver.quit()
})

test
