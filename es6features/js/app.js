/**
 * Created by achamoli on 6/2/17.
 */

import { InternetCustomer } from './internetcustomer';
import { Customer } from './customer';
import {Order} from './order';
import { ValueProvider } from './valueprovider';

import {ValueAnalyzer} from './valueanalyzer';
import {DataProcessor} from './arrowfunctions'

import {HeavyWorker, HeavyWorker2} from './withoutpromises';
import * as PromiseWorkers from './withpromises';

import './enhancedobjliterals';
import './proxies';
/////////////////////////////////

let customer = new InternetCustomer(10, 'Northwind Traders', 'Bangalore', 12000, true, 'http://blogs.msdn.com/nwt');

console.log(customer.format());
console.log(customer instanceof InternetCustomer);

let customerCsvString = '10,Northwind,NCR,34930,true';
let anotherCustomer = Customer.createCustomer(customerCsvString);
anotherCustomer.addOrder(new Order(1, new Date(), 12000));
anotherCustomer.addOrder(new Order(2, new Date(), 12000));
anotherCustomer.addOrder(new Order(3, new Date(), 12000));
anotherCustomer.addOrder(new Order(4, new Date(), 12000));

for (let order of anotherCustomer.getOrders())
    console.info(order.toString());

console.info('Iterating Customer Object Directly');

for (let order of anotherCustomer)
    console.info(order.toString());

console.log(anotherCustomer.format());

//let provider = new ValueProvider(100,200,300,400,500,600);
//console.log(provider.getValues());

let analyzer = new ValueAnalyzer(1,2,3,4,5);
let analyzedValues = analyzer.getValues();
console.log(analyzedValues);

console.log(JSON.stringify(anotherCustomer));

let dataProcessor = new DataProcessor();
let result = dataProcessor.process(
    (a,b) => a + b,
    function (a, b) {
        return a - b;
    },
    (a,b) => {
        console.log('Arrow functions with a block..');
        return a * b;
    });

//console.log(result);

console.log(result());

/////////////////////////////

let worker1 = new HeavyWorker();
let worker2 = new HeavyWorker2();


// Multiple Async Operations, but sequentially..
// UI wait time is moe in this scenario
/*worker1.doHeavyWork(10,
    (result) => {
        console.log('Worker 1 completed ...' + JSON.stringify(result));

        worker2.doHeavyWork(300, (result) => {
            console.log('Worker 2 completed ...' + JSON.stringify(result));
        })
    }

)*/

let heavyWorker1 = new PromiseWorkers.HeavyWorker();
let heavyWorker2 = new PromiseWorkers.HeavyWorker2();

let input = 200;

Promise.all(
    [
        heavyWorker1.process(input),
        heavyWorker2.process(input)
    ]).then(
        data => console.log('Both successfully completed ..' + JSON.stringify(data)),
    error => console.log('One fo the workers failed ..' + JSON.stringify(error))
);





