/**
 * Created by achamoli on 6/2/17.
 */

import { Customer } from './customer';
import {ObjectFormatter} from './formatutils';

class InternetCustomer extends Customer {
    constructor(id, name, address, credit, status, blogUrl) {
        super(...arguments);

        this.blogUrl = blogUrl;
    }

    format() {
        let formattedMessage =  ObjectFormatter.format(this);
        //let formattedMessage = `${super.format()}, ${this.blogUrl}`;
        return formattedMessage.toUpperCase();
    }
}

export { InternetCustomer };