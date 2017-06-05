/**
 * Created by achamoli on 6/2/17.
 */

var customer = new InternetCustomer(
    10, 'Northwind Traders', 'Bangalore', 12000, true, 'https://blogs.msdn.com/nwt');

console.log(customer.format());
console.log(customer instanceof Customer);
console.log(customer instanceof InternetCustomer);