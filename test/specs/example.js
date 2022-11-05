const LoginPage = require('../pageobjects/login.page');
const SamplesPage = require('../pageobjects/samples.page');
const ChainedViewPage = require('../pageobjects/chained.view.page');

describe('Sample list testing', () => {
    it('should be able to login with valid credentials', async () => {
        await LoginPage.login('admin', 'admin');
        await expect(SamplesPage.chainedView).toBeExisting();
    });

    it('should be able to chained view', async () => {
        await SamplesPage.clickChainedView();
        await expect(ChainedViewPage.container1).toHaveTextContaining("Hello World, I'm View one");
        await expect(ChainedViewPage.container2).toHaveTextContaining("Hello World, I'm View two");
        await expect(ChainedViewPage.container3).toHaveTextContaining("Hello World, I'm View three");
    });
});


