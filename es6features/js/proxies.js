/**
 * Created by achamoli on 6/3/17.
 */

function processOrder(order) {
    console.log('Order Processing Started..');
    console.log('Order Data: ' + JSON.stringify(order));

    if(order.amount >= 1000)
        console.log('Order Status : PROCESSED');
    else console.log('Order Status : ON-HOLD');

    return true;
}

function doWork(orderId) {
    let order = {
        id: orderId,
        date: new Date(),
        amount: 2300
    };

    processOrder(order);
}

Array.prototype.isExist = function (item) {
    let status = false;

    if (item) {
        for (let index in this) {
            if (this[index] === item) {
                status = true;
                break;
            }
        }
    }
    return status;
}

processOrder = new Proxy(processOrder, {
    apply: function (target, currentHandler, args) {
        let alreadyProcessedOrders = ['ORD10001', 'ORD10002', 'ORD10003'];

        console.log('Proxying started..');

        let orderId = args[0].id;

        if (alreadyProcessedOrders.isExist(orderId)) {
            console.log('Order processing already completed');
            return true;
        } else {
            console.log('Order processing already completed');
            let status = target(...args);

            return status;
        }
    }
})

doWork('ORD10001');