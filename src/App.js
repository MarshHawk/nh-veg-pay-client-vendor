import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import combinedReducer from './reducers/combinedReducer';
import PaymentRoot from './components/paymentRoot';
import VendorRoot from './components/vendorRoot';
import './App.css';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, createLogger())(createStore)
let store = createStoreWithMiddleware(combinedReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/vendor" component={VendorRoot} />
            <Route exact path="/payment" component={PaymentRoot} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App