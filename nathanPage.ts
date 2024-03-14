import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";
const fs = require('fs')

export class starCitizen extends BasePage {
    account: By = By.xpath('//span[text()="Account"]')
    email: By = By.xpath('//input[@id="email"]')
    password: By = By.xpath('//input[@id="password"]')
    signUp: By = By.xpath('//div[@class="c-formLegacyEnlist__submit-button-label"]')
    account2: By = By.xpath('//span[text()="Account"]')
    image: By = By.xpath('//a[@class="c-account-sidebar__profile-metas-avatar"]')
    apps: By = By.xpath('//span[text()="Apps"]')
    new: By = By.xpath('//span[text()="New"]')
    devTracker: By = By.xpath('(//span[@class="c-brand-menu__item-text"])[3]')
    activity: By = By.xpath('//span[text()=" activity"]')
    button: By = By.xpath('//button[@class="sc-dc614e00-0 llbkzE"]')

    


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
        await this.driver.sleep(17000)
        await fs.writeFile(`${__dirname}/login.png`,
        await this.driver.takeScreenshot(),"base64",
            (e) => {
        if (e) console.error(e)
        else console.log('Got it!')
        });
    };

    async Icon(){
        await this.driver.manage().window().maximize()
        await this.navigate()
        await this.click(this.account2)
        await this.click(this.image)
        await this.click(this.devTracker)
        await this.click(this.activity)
     }

    async community(){
        await this.driver.manage().window().maximize()
        await this.navigate()
        await this.click(this.apps)
        await this.click(this.new)
        await this.click(this.button)
        await this.driver.sleep(2000)
        await this.click(this.button)
        await this.driver.sleep(2000)
        await this.click(this.button)
        await this.driver.sleep(2000)
        await this.click(this.button)
        await this.driver.sleep(2000)
    };
};
