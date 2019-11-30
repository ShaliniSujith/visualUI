import Page from "./Page";
const Forms = require('../pages/Forms.page');
const Overview = require('../pages/Overview.page');

class Demopage extends Page {
    get mainAuthDiv() { return $('.auth-box-w'); }
    get siteLogo() { return $('img[src$="logo-big.png"]'); }
    get header() { return $('.auth-header'); }
    get userNameInput() { return $('#username'); }
    get passwordInput() { return $('#password'); }
    get loggedInUserIcon() { return $('.logged-user-i'); }
    get loginError() { return $('.alert-warning'); }

    get forms() { return new Forms('form'); }
    get userOverview() { return new Overview('.content-box'); }

    headerText() { return this.header.getText(); }
}
export default new Demopage();
