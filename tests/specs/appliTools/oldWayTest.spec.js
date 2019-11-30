const expect = require('chai').expect;
import demo from "../../support/pages/Demopage";

describe("Login Page UI test", function() {
    beforeEach(function() {
        browser.url('/');
        $('.auth-box-w').waitForExist(3000);
    });

    it('should display main div block', function() {
        expect(demo.mainAuthDiv.isDisplayed()).to.be.true;
    });

    it('should display header logo', function() {
        expect(demo.siteLogo.isDisplayed()).to.be.true;
    });

    it('should display header text as Login', function() {
        expect(demo.headerText()).to.contain('Login Form');
    });
    it('should display form', function() {
        expect(demo.forms.form.isDisplayed()).to.be.true;
    });

    it('should list form label text as "Username, Password, Remember Me"', function() {
        expect(demo.forms.getLabelText(), "All labels are not matching").to.deep.equal(['Username', 'Password', 'Remember Me']);
    });


    it('should display username icon in the form', function() {
        expect(demo.forms.getUserIcon().isDisplayed(), "User Icon is not displayed").to.be.true;
    });


    it('should display password icon in the form', function() {
        expect(demo.forms.getPasswordIcon().isDisplayed(), "Password icon is not displayed").to.be.true;
    });


    it('should display username and password input field ', function() {
        expect(demo.forms.userNameInput.isDisplayed(), "UserName input field is not displayed").to.be.true;
        expect(demo.forms.passwordInput.isDisplayed(), "Password input field is not dispalyed").to.be.true;
    });

    it('should display username input placeholder as "Enter your username"', function() {
        expect(demo.forms.getUNInputFiedPlaceholder(), "Username inputfield placeholder is not displayed as expected").to.contain('Enter your username');
    });

    it('should display password input field placeholder as "Enter your password"', function() {
        expect(demo.forms.getPswdInputFiedPlaceholder(), "Passwrod inputfield placeholder is not displayed as expected").to.contain('Enter your password');
    });


    it('should display all 3 social media icons in the form', function() {
        const socialMediaImgSrc = demo.forms.getSMLinkSrc();
        expect(socialMediaImgSrc, "Not all 3 social media icons are diaplsyed").to.have.lengthOf(3);
    });

    it('should display twitter icon in the form', function() {
        const socialMediaIconSrc = demo.forms.getSMIconSrc();
        expect(socialMediaIconSrc, "twitter image is not present").to.include("https://demo.applitools.com/img/social-icons/twitter.png");
    });

    it('should display link for the twitter icon', function() {
        const socialMediaLinkSrc = demo.forms.getSMLinkSrc();
        expect(socialMediaLinkSrc, "twitter link is not present").to.include("https://demo.applitools.com/img/social-icons/twitter.png");
    });

    it('should display facebook icon in the form', function() {
        const socialMediaIconSrc = demo.forms.getSMIconSrc();
        expect(socialMediaIconSrc, "facebook image is not present").to.include("https://demo.applitools.com/img/social-icons/facebook.png");
    });

    it('should display link for the facebook icon', function() {
        const socialMediaImgSrc = demo.forms.getSMLinkSrc();
        expect(socialMediaImgSrc, "facebook link is not present").to.include("https://demo.applitools.com/img/social-icons/facebook.png");
    });

    it('should display linkedin icon in the form', function() {
        const socialMediaIconSrc = demo.forms.getSMIconSrc();
        expect(socialMediaIconSrc, "LinkedIn image is not present").to.include("https://demo.applitools.com/img/social-icons/linkedin.png");
    });

    it('should display link for the linkedin icon', function() {
        const socialMediaImgSrc = demo.forms.getSMLinkSrc();
        expect(socialMediaImgSrc, "LinkedIn link is not present").to.include("https://demo.applitools.com/img/social-icons/linkedin.png");
    });

    it('should display login button in the form', function() {
        expect(demo.forms.getLoginBtn().isDisplayed(), "Login button is not displayed").to.be.true;
    });

    it('should display remember me checkbox in the form', function() {
        expect(demo.forms.getRememberMeChckBox().isDisplayed(), "Remember me checkbox is not displayed").to.be.true;
    });

    it('should display remember me checkbox with a margin of "5px" from its text', function() {
        expect(demo.forms.getRememberMeChckBoxCSS(), "Remember me checkbox margin is more than 5px").to.have.property('value', '5px');
    });
});
