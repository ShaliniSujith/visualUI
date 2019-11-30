class Browser {
    constructor(browser, headlessMode) {
        this.browser = browser;
        this.headlessMode = headlessMode;
    }

    create() {
        switch (this.browser) {
            case 'chrome':
                return this.chrome(this.headlessMode);
            default:
                return this.emulatedDevice(this.browser, this.headlessMode);
        }
    }

    chrome() {
        const chromeArgs = ['--disable-gpu', '--start-maximized', 'disable-extensions', '--disable-infobars',
            '--disable-dev-shm-usage'];
        if (this.headlessMode) {
            chromeArgs.push('--headless');
        }
        return {
            "browserName": 'chrome',
            "maxInstances": 5,
        };
    }

    emulatedDevice(device, isHeadless) {
        const chromeArgs = ['--disable-gpu', 'disable-extensions', '--disable-infobars',
            '--disable-dev-shm-usage', 'disable-web-security'];
        if (isHeadless) {
            chromeArgs.push('--headless');
        }
        return {
            "browserName": 'chrome',
            "acceptInsecureCerts": true,
            'goog:chromeOptions': {
                mobileEmulation: {deviceName: device},
                args: chromeArgs,
                useAutomationExtension: false,
            },
        };
    }
}

module.exports = Browser;
