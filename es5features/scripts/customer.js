/**
 * Created by achamoli on 6/2/17.
 */

function Customer(id, name, address, credit, status) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.credit = credit;
    this.status = status;
}

Customer.prototype.format = function () {
    var formattedMessage =
        this.id + ',' + this.name + ',' + this.address
        this.credit + ',' + this.status;

    return formattedMessage;
};
