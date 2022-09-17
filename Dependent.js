export default class Dependent {
    constructor(name, age, picture) {
        this.name = name;
        this.age = age;
        this.picture = picture || undefined;
    }
    get sales() {
        return this._sales;
    }
    set sales(newSale) {
        if (typeof newSale === 'number') {
            this._sales = newSale;
        } else {
            console.log('invalid input');
        }
    }
}