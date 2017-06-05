/**
 * Created by achamoli on 6/3/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {HeaderComponent} from './components/header';
import {FooterComponent} from './components/footer';

class AppComponent extends React.Component {
    constructor(properties) {
        super(properties);

        console.log('Application Initialized');
    }

    render() {
        let markup = (
            <div>
                <h1>Welcome to the world of react!</h1>
                <HeaderComponent title='React Training @ Cvent'/>
                <br/>
                <br/>
                <FooterComponent footer="this is the footer"/>
            </div>
        );
        return markup;
    }
}

let appElement = document.getElementById('app');

ReactDOM.render(<AppComponent/>, appElement);