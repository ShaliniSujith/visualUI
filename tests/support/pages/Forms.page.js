class Forms {
    constructor(selector) {
        this.form = $(selector);
    }

    get passwordIcon() {return $('.os-icon-fingerprint');}

    get userNameInput() {return this.form.$('#username');}

    get passwordInput() {return this.form.$('#password');}

    getLabels() {
        return this.form.$$('label');
    }

    getFormDivs() {
        return this.form.$$('div');
    }

    getLabelText() {
        const label = this.getLabels();
        return label.map(function(element) {return element.getText();});
    }

    getUserIcon() {
        return this.form.$('.os-icon-user-male-circle');
    }

    getPasswordIcon() {
        return this.form.$('.os-icon-fingerprint');
    }

    getSocialMediaIcons() {
        return this.form.$$('img');
    }

    getSocialMediaIconLinks() {
        return this.form.$$('a img');
    }

    getSMLinkSrc() {
        const label = this.getSocialMediaIconLinks();
        return label.map(function(element) {return element.getAttribute('src');});
    }

    getSMIconSrc() {
        const label = this.getSocialMediaIcons();
        return label.map(function(element) {return element.getAttribute('src');});
    }

    getLoginBtn() {
        return this.form.$('form #log-in');
    }

    getRememberMeChckBox() {
        return this.form.$('.form-check-input');
    }

    getRememberMeChckBoxCSS() {
        return this.getRememberMeChckBox().getCSSProperty('margin-right');
    }

    getUNInputFiedPlaceholder() {
        return this.userNameInput.getAttribute('placeholder');
    }

    getPswdInputFiedPlaceholder() {
        return this.passwordInput.getAttribute('placeholder');
    }

    fillLoginForm(username, password) {
        this.userNameInput.setValue(username);
        this.passwordInput.setValue(password);
        this.getLoginBtn().click();
        return this;
    }
}
module.exports = Forms;
