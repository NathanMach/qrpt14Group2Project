import { starCitizen } from "../nathanPage";
const page = new starCitizen()
const fs = require('fs')

test('open account', async () => {
    await page.driver.manage().window().maximize()
    await page.navigate()
    await page.driver.sleep(3000)
    await page.click(page.account)
    await page.driver.sleep(1000)
    await page.click(page.email)
    await page.click(page.password)
    await page.setInput(page.email, 'barrettsnowwolf@yahoo.com')
    await page.driver.sleep(2000)
    await page.setInput(page.password, 'Spartan852')
    await page.driver.sleep(2000)
    await page.click(page.remember)
    await page.driver.sleep(2000)
    await page.driver.quit()

})