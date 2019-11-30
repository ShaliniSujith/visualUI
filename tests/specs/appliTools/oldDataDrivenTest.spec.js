const expect = require('chai').expect;
import demo from "../../support/pages/Demopage";

const inputs = [
    {
        test: 'When username and password is blank',
        username: '',
        password: '',
        expectedError: 'Both Username and Password must be present',
    },

    {
        test: 'When password is blank',
        username: 'username',
        password: '',
        expectedError: 'Password must be present',
    },
    {
        test: 'When username is blank',
        username: '',
        password: 'pass',
        expectedError: 'Username must be present',
    },
];


describe('Data driven verification with invalid combinations', function() {
    inputs.forEach(function(input) {
        let testName = input.test;

        if (input.expectedError) {
            testName += ` should show error: ${input.expectedError}`;
        }
        else {
            testName += ` should pass validation`;
        }

        it(testName, function() {
            browser.url('https://demo.applitools.com/hackathon.html');
            demo.forms.fillLoginForm(input.username, input.password);
            const errorMessages = demo.loginError.getText();
            if (input.expectedError) {
                expect(errorMessages).to.contain(input.expectedError);
            } else {
                expect(errorMessages).to.equal('');
            }
        });
    });
});

describe('Logged in scenarios', function() {
    before('User successfully logs in to the form', function() {
        browser.url('https://demo.applitools.com/hackathon.html');
        demo.forms.fillLoginForm('John', 'Smith');
    });

    it('should display loggedin user icon when user successfully logged in', function() {
        expect(demo.loggedInUserIcon.isDisplayed()).to.be.true;
    });

    it('should display recent transactions table', function() {
        expect(demo.userOverview.transactionTable.table.isDisplayed()).to.be.true;
    });

    it('should display amounts column in ascending order when clicked', function() {
        demo.userOverview.transactionTable.clickAmountHeader();
        const amountValues = demo.userOverview.transactionTable.getColumnText(5);
        expect(amountValues, "Amount is not in ascending order").to.be.deep.equal(['- 320.00 USD',
            '- 244.00 USD',
            '+ 17.99 USD',
            '+ 340.00 USD',
            '+ 952.23 USD',
            '+ 1,250.00 USD']);
    });

    it('should display each row in tact after sorting', function() {
        demo.userOverview.transactionTable.clickAmountHeader();
        const rowsProp = demo.userOverview.transactionTable.getRowsCSS();
        rowsProp.map(function(element) {return expect(element, "Table rows have a border radius as 4px").to.have.property('value', '4px');});
    });
});

describe.only('Dynamic content Test', function() {
    before('User successfully logs in to the form', function() {
        browser.url('https://demo.applitools.com/hackathonApp.html?showAd=true');
    });

    it('should display Sale 1 img', function() {
        expect(demo.userOverview.flashSale1.isDisplayed()).to.be.true;
    });

    it('should display Sale 1 img src as img/flashSale.gif', function() {
        expect(demo.userOverview.getflashSale1ImgSrc()).to.contain('img/flashSale.gif');
    });

    it('should display Sale 2 img', function() {
        expect(demo.userOverview.flashSale2.isDisplayed()).to.be.true;
    });

    it('should display Sale 2 img src as img/flashSale2.gif', function() {
        expect(demo.userOverview.getflashSale2ImgSrc()).to.contain('img/flashSale2.gif');
    });
});
