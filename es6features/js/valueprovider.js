/**
 * Created by achamoli on 6/3/17.
 */

class ValueProvider {
    constructor() {
        this.values = arguments;
    }
    getValues() {
        let processedValues = [];
        for (let val in this.values) {
            console.log(val);
            if (val % 2 === 0) {
                processedValues.push(this.values[val]);
            }
        }
        return processedValues;
    }
}

export { ValueProvider };