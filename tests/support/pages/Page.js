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
}
