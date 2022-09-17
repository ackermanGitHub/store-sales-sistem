import Departament from "./Departament.js";
export default class Complex {
    _departaments = [];
    get departaments() {
        return this._departaments;
    }
    set departaments(newDepartament) {
        if (newDepartament instanceof Departament) {
            this._departaments.push(newDepartament);
        } else {
            console.log('invalid input');
        }
    }
}