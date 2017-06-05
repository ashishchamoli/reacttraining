/**
 * Created by achamoli on 6/5/17.
 */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

let appElement = document.getElementById('app');
let appMarkup = (
    <App/>
);

ReactDOM.render(appMarkup, appElement);