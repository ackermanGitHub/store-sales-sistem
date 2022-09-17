export default class Dependent {
    get sales() {
        console.log('sales checked');
        return this._sales;
    }
    set sales(newSale) {
        if (typeof newSale === 'number') {
            this._sales = newSale;
            console.log('sales updated');
        } else {
            console.log('invalid input');
        }
    }
}