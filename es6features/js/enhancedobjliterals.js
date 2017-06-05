/**
 * Created by achamoli on 6/3/17.
 */

let [id, name] = [10, 'Gaurav'];
let licenseKey = 'LIC8349834';

class Customer {
    format() {
        return this.id + ', ' + this.name;
    }
}

let customer = {
    id,
    name,
    [`_Prop${licenseKey}`]: 100,
    work() {
        return 'Success'
    },
    __proto__: new Customer()
};

console.log(customer instanceof Customer);
console.log(customer.format());
console.log(customer.work());
console.log(customer._PropLIC8349834);