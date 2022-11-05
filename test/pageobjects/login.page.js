class LoginPage {
    // document selector----> https://webdriver.io/docs/selectors
    get inputUsername() { return $('#username'); }
    get inputPassword() { return $('#password'); }
    get btnSubmit() { return $('//XCUIElementTypeOther[@name="login"]'); }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
