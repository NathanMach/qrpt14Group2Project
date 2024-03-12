import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";
const fs = require('fs')

export class starCitizen extends BasePage {
    account: By = By.xpath('//span[text()="Account"]')
    email: By = By.xpath('//input[@id="email"]')
    password: By = By.xpath('//input[@id="password"]')
    signUp: By = By.xpath('//div[@class="c-formLegacyEnlist__submit-button-label"]')
    buyGame: By = By.xpath('//button[@class= "CtaClipper PackSelectorTransactionSummary__cta"]')
    check: By = By.xpath('//div[@class= "Checkbox__box"]')
    
    constructor() {
        super ({url: "https://robertsspaceindustries.com/star-citizen/play-now?gad_source=1&gclid=CjwKCAiAxaCvBhBaEiwAvsLmWD7xaZ9WpKNSJfhDDy9dtmiGs2OjpGHZSHU1yvr4CILBJnwR8qNCIhoC3sAQAvD_BwE"})
    };
    async signIn(){
        await this.driver.manage().window().maximize()
        await this.navigate()
        await this.driver.sleep(2000)
        await this.click(this.account)
        await this.driver.sleep(1000)
        await this.click(this.email)
        await this.click(this.password)
        await this.setInput(this.email, 'barrettsnowwolf@yahoo.com')
        await this.driver.sleep(1000)
        await this.setInput(this.password, 'Spartan852')
        await this.driver.sleep(1000)
        await this.click(this.signUp)
        await this.driver.sleep(12000)
    }

    async addToCart(){
        await this.driver.manage().window().maximize()
        await this.navigate()
        await this.driver.sleep(1000)
        await this.click(this.check)
        await this.click(this.buyGame)
        await this.driver.sleep(1000)
        await this.click(this.signUp)
        await this.driver.sleep(2000)
        await fs.writeFile(`${__dirname}/addCart.png`,
        await this.driver.takeScreenshot(),"base64",
    (e) => {
        if (e) console.error(e)
        else console.log('Got it!')
    });
    }
}
