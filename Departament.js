import Dependent from "./Dependent.js";
export default class Departament {
    _dependents = [];
    constructor(name) {
        this.name = name;
    }
    get dependents() {
        return this._dependents;
    }
    set dependents(newDependent) {
        if (newDependent instanceof Dependent) {
            this._dependents.push(newDependent);
        } else {
            console.log('invalid input');
        }
    }
}