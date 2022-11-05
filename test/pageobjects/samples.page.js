class SamplesPage {
    // document selector----> https://webdriver.io/docs/selectors
    get chainedView() { return $('#chainedView'); }

    async clickChainedView() {
        await this.chainedView.click();
    }
}

module.exports = new SamplesPage();
