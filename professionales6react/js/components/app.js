/**
 * Created by achamoli on 6/5/17.
 */

import React from 'react';
import Header from './header';
import MortgageCalculator from './mortgagecalculator';

class App extends React.Component {
    constructor(properties) {
        super(properties);
    }

    render() {
        let markup = (
          <div>
              <Header title="Professional ES6 React"/>
              <MortgageCalculator principal="200000" years="20" rate="5"/>
          </div>
        );

        return markup;
    }
}

export default App;