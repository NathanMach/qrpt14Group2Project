import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class starCitizen extends BasePage {
    account: By = By.xpath('//span[text()="Account"]')
    email: By = By.xpath('//input[@id="email"]')
    password: By = By.xpath('//input[@id="password"]')
    remember: By = By.xpath('//span[@class="checkbox"]')
    
    constructor() {
        super ({url: "https://robertsspaceindustries.com/star-citizen/play-now?gad_source=1&gclid=CjwKCAiAxaCvBhBaEiwAvsLmWD7xaZ9WpKNSJfhDDy9dtmiGs2OjpGHZSHU1yvr4CILBJnwR8qNCIhoC3sAQAvD_BwE"})
    };
    async star (citizen) {
        await this.click(citizen)
    }
}
