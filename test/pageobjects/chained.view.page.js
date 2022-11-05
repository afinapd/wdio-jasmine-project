class ChainedViewPage {
    // document selector----> https://webdriver.io/docs/selectors
    get container1() { return $('(//XCUIElementTypeStaticText[@name="textView"])[1]'); }
    get container2() { return $('(//XCUIElementTypeStaticText[@name="textView"])[2]'); }
    get container3() { return $('(//XCUIElementTypeStaticText[@name="textView"])[3]'); }
}

module.exports = new ChainedViewPage();
