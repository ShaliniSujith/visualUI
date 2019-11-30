import Driver from '../utils/Driver.Extension';
const utilities = require('../utils/Utilities');

export default class Page {
    get aTag() { return $('main').$$('a'); }
    get cookieBanner() { return $('button.optanon-alert-box-close.banner-close-button'); }
    constructor() {
        this.driver = Driver;
        this.utilities = utilities;
    }

    open(path) {
        this.driver.visit(path);
    }

    // ssoAuthentication() {
    //     const ssoUrls = 'ssoAuthenticationUrls';
    //     this.open(utilities.getValueFromKey(ssoUrls, 'EkMobileQA'));
    //     this.open(utilities.getValueFromKey(ssoUrls, 'EkMobileQA2'));
    //     this.open(utilities.getValueFromKey(ssoUrls, 'Flystaging14'));
    //     this.open(utilities.getValueFromKey(ssoUrls, 'Flystaging6'));
    //     this.open(utilities.getValueFromKey(ssoUrls, 'Flystaging5'));
    //     this.open(utilities.getValueFromKey(ssoUrls, 'Flystaging6a'));
    //     this.open(utilities.getValueFromKey(ssoUrls, 'Flystaging19'));
    //     this.open(utilities.getValueFromKey(ssoUrls, 'Fly3'));
    // }

    // setCountryLangEndPoint(country, lang, endPoint) {
    //     return utilities.setCountryLangEndPoint(country, lang, endPoint);
    // }

    // setBaseUrl(baseUrl) {
    //     browser.options.baseUrl = utilities.getValueFromKey('baseUrls', baseUrl);
    // }

    // isEveryLinkReturns200Response() {
    //     return utilities.getAllLinksAndStatusCode(this.aTag);
    // }

    // closeAdditionalTabs() {
    //     const handle = browser.getWindowHandles();
    //     if (handle.length > 1) {
    //         for (let i = 1; i <= handle.length - 1; i++) {
    //             browser.switchToWindow(handle[i]);
    //             browser.closeWindow();
    //             browser.switchToWindow(handle[0]);
    //         }
    //     }
    // }

    // closeCookieBanner() {
    //     if (this.driver.isDisplayed(this.cookieBanner)) {
    //         this.driver.click(this.cookieBanner, 8000);
    //     }
    // }
}
