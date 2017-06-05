/**
 * Created by achamoli on 6/5/17.
 */

import React from 'react';

class Header extends React.Component {
    constructor(properties) {
        super(properties);
    }

    render() {
        let markup = (
            <header>
                <h1>
                    {this.props.title}
                </h1>
            </header>
        );

        return markup;
    }
}

export default Header;