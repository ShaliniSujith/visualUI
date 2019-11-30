const Table = require('../pages/TransactionTable.page');
class Overview {
    constructor(selector) {
        this.overview = $(selector);
    }

    get transactionTable() {return new Table('#transactionsTable');}
    get flashSale1() {return this.overview.$('#flashSale img');}
    get flashSale2() {return this.overview.$('#flashSale2 img');}

    getflashSale1ImgSrc() {
        return this.flashSale1.getAttribute('src');
    }

    getflashSale2ImgSrc() {
        return this.flashSale2.getAttribute('src');
    }
}
module.exports = Overview;
