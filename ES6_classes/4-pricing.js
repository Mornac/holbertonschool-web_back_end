import Currency from './3-currency.js';

export default class Pricing {
    constructor(amount, currency) {
        if (typeof amount !== 'number') {
            throw new TypeError('amount must be a number');
        }
        if (!(currency instanceof Currency)) {
            throw new TypeError('currency must be an instance of Currency');
        }
        this._amount = amount;
        this._currency = currency;
    }

    get amount() {
        return this._amount;
    }
    set amount(newamount) {
        if (typeof newamount !== 'number') {
            throw new TypeError('amount must be a number');
        }
        this._amount = newamount;
    }

    get currency() { 
        return this._currency;
    }
    set currency(newcurrency) {
        if (!(newcurrency instanceof Currency)) {
            throw new TypeError('Currency must be an instance of Currency');
        }
        this._currency = newcurrency;
    }

    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    static ConvertPrice(amount, conversionRate) {
        if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
            throw new TypeError('amount and conversionRate must be numbers');
        }
        return amount * conversionRate;
   }
}
