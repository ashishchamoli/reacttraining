/**
 * Created by achamoli on 6/2/17.
 */

const DELIMITER = ', ';
const NO_OF_TRAIL_CHARACTERS = 2;

class ObjectFormatter {
    static format(obj) {
        let formattedMessage = '';

        if(obj) {
            for (let property in obj) {
                var validation = obj[property] &&
                        typeof obj[property] !== "function";

                if (validation) {
                    formattedMessage += `${obj[property]}${DELIMITER}`;
                }
            }

            formattedMessage = formattedMessage.substr(0, formattedMessage.length - NO_OF_TRAIL_CHARACTERS);
        }

        return formattedMessage;
    }
}

export { ObjectFormatter };