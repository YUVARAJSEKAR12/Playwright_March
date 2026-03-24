class BasePage {
    constructor(page) {
        this.page = page;
    }
    //changes in the local
    //Tester2 changes
    //Tester3 changes
    async navigate(url) {
        await this.page.goto(url, {
            timeout: 60000,
            waitUntil: 'domcontentloaded'
        });
    }

    async fill(locator, value) {
        await this.page.fill(locator, value);
    }

    async click(locator) {
        await this.page.click(locator);
    }

    async getText(locator) {
        return await this.page.textContent(locator);
    }

    async getText2(locator) {
        return await this.page.textContent(locator);
    }

    async getText1(locator) {

        return await this.page.textContent(locator);
    }
}

module.exports = BasePage;
