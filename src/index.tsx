import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import {configureStore} from './configureStore';

import {rootReducer} from './reducers/app';

import {getCurrentLocation} from './actions/actions';

import 'bootstrap/dist/js/bootstrap.min.js';

import './assets/bootstrap/css/bootstrap.min.css';

import {Main} from './components/Main';

let store = configureStore();

store.dispatch(getCurrentLocation());

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("mount")
);
