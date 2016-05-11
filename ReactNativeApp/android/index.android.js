'use strict';

import React, {Component}   from 'react-native';
import { App }              from './containers';
import { Provider }         from 'react-redux';
import configureStore       from '../common/redux/store/configureStore';

const store = configureStore();

class jsair extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default jsair;
