const endPoints = require("../data/testUrl.config");
const fs = require('fs');
const allureReport = `${process.cwd()}/allure-report`;
const allureResults = `${process.cwd()}/reports/allure-results`;

class Utilities {
    setCountryLangEndPoint(country, lang, endPoint) {
        let path = '';
        path = country ? `${path}${endPoints['country'][country]}/` : path;
        path = lang ? `${path}${endPoints['language'][lang]}/` : `${path}${endPoints['language']['english']}/`;
        path = endPoint ? `${path}${endPoints['endPoints'][endPoint]}` : path;
        return path;
    }
    /*
        Allure report cleanup
    */
    reportCleanUp() {
        this.rmDir(allureReport);
        this.rmDir(allureResults);
    }

    rmDir(path) {
        if (fs.existsSync(path)) {
            fs.readdirSync(path).forEach((file, index) => {
                const curPath = path + "/" + file;
                if (fs.lstatSync(curPath).isDirectory()) { // recurse
                    this.rmDir(curPath);
                } else { // delete file
                    fs.unlinkSync(curPath);
                }
            });
            fs.rmdirSync(path);
        } else {
            console.log(`No folder found ${path}`);
        }
    }

}
module.exports = new Utilities;
