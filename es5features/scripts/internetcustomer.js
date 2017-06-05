/**
 * Created by achamoli on 6/2/17.
 */

function InternetCustomer(id, name, address, credit, status, blogUrl) {
    Customer.apply(this, arguments);

    this.blogUrl = blogUrl;

}

InternetCustomer.prototype = new Customer();
InternetCustomer.prototype.constructor = InternetCustomer;
/*
* In javascript, inheritance is achieved with following steps
*
* */
InternetCustomer.prototype.format = function () {
    var formattedMessage =
        Customer.prototype.format.call(this) + ',' +
            this.blogUrl;

    return formattedMessage.toUpperCase();
};