class TransactionTable {
    constructor(selector) {
        this.table = $(selector);
    }

    get amountHeader() { return this.table.$('th#amount'); }

    clickAmountHeader() {
        this.amountHeader.click();
        return this;
    }

    getRows() {
        const rows = this.table.$$(`tbody tr`);
        return rows;
    }

    getRowsCSS() {
        return this.getRows().map(function (element) { return element.getCSSProperty('border-radius'); });
    }


    getColumn(index) {
        const columns = this.table.$$(`tbody tr td:nth-child(${index})`);
        return columns;
    }

    getColumnText(index) {
        const column = this.getColumn(index);
        return column.map(function (element) { return element.getText(); });
    }
}
module.exports = TransactionTable;
