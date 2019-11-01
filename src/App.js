import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import configureStore from './store/index';
import { checkReducer } from './actions/test/index';
import { AppBody } from './views/app.body';

const store = configureStore();
store.dispatch(checkReducer());
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
