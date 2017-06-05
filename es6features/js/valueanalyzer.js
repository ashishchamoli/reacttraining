/**
 * Created by achamoli on 6/3/17.
 */

import { ValueProvider } from './valueprovider';

class ValueAnalyzer extends ValueProvider {
    constructor() {
        super(...arguments);
    }
    getValues() {
        let processedMessages = super.getValues();

        return processedMessages.map(item => item * item);
    }
}

export { ValueAnalyzer };