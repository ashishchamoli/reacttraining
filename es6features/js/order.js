/**
 * Created by achamoli on 6/3/17.
 */

import {ObjectFormatter} from './formatutils'

class Order {
    constructor (orderId, orderDAte, amount) {
        [this.orderId, this.orderDate, this.amount] = arguments;
    }

    toString() {
        return ObjectFormatter.format(this);
    }
}

export { Order };