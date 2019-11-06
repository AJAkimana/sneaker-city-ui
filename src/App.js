import React, { Component } from 'react';
import { Provider } from 'react-redux';
import $ from 'jquery';
import configureStore from './store/index';
import { checkReducer } from './actions/test/index';
import { AppBody } from './views/app.body';

const store = configureStore();
store.dispatch(checkReducer());

window.jQuery = $;
window.$ = $;
global.jQuery = $;
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppBody />
      </Provider>
    );
  }
}
export default App;
