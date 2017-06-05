/**
 * Created by achamoli on 6/3/17.
 */

import React from 'react';

class FooterComponent extends React.Component {
    constructor(properties) {
        super(properties);

        console.log('Footer Component Initialized');
    }

    render() {
        let footerMarkup = (
            <div>
                <h7> {this.props.footer} </h7>
            </div>
        );

        return footerMarkup;
    }
}

export {FooterComponent};