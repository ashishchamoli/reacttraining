/**
 * Created by achamoli on 6/2/17.
 */

import {ObjectFormatter} from './formatutils';
import {Order} from './order';

const COL_SEPARATOR = ',';
const ORDER_SYMBOL = Symbol("Order Symbol");
class Customer {
    constructor(id, name, address, credit, status) {
        [this.id, this.name, this.address,
            this.credit, this.status] = arguments;
        //this.orders = [];
        this[ORDER_SYMBOL] = [];
    }

    format() {
        return ObjectFormatter.format(this);
        //let formattedMessage = `${this.id}, ${this.name}, ${this.address}, ${this.credit}, ${this.status}`;
    }

    addOrder(order) {
        if (order) {
            //this.orders.push(order);
            this[ORDER_SYMBOL].push(order);
        }
    }

    getOrders() {
        //return this.orders;
        return this[ORDER_SYMBOL];
    }

    *[Symbol.iterator]() {
        /*for(let order of this.orders) {
            yield order;
        }*/
        for(let order of this[ORDER_SYMBOL]) {
            yield order;
        }
    }

    static createCustomer(csvString) {
        let customer = null;

        if(csvString){
            let splittedCsvString = csvString.split(COL_SEPARATOR);
            customer = new Customer(...splittedCsvString);
        }
        return customer;
    }
}

export {Customer};