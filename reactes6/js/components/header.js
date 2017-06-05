/**
 * Created by achamoli on 6/3/17.
 */

import React from 'react';

class HeaderComponent extends React.Component {
    constructor(properties) {
        super(properties);

        console.log('Header Component Initialized');
    }

    render() {
        let headerMarkup = (
            <div>
                <h2> {this.props.title} </h2>
            </div>
        );

        return headerMarkup;
    }
}

export {HeaderComponent};