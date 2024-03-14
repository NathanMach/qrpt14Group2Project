import { starCitizen } from "../nathanPage";
const page = new starCitizen()
const fs = require('fs')

test('open account', async () => {
    await page.signIn()
})

test('Account Icon', async () => {
    await page.Icon()
})

test('apps', async () => {
    await page.community()
    await page.driver.quit()
});

