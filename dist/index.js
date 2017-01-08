"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const react_redux_1 = require("react-redux");
const configureStore_1 = require("./configureStore");
const actions_1 = require("./actions/actions");
require("bootstrap/dist/js/bootstrap.min.js");
require("./assets/bootstrap/css/bootstrap.min.css");
const Main_1 = require("./components/Main");
let store = configureStore_1.configureStore();
store.dispatch(actions_1.getCurrentLocation());
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(Main_1.Main, null)), document.getElementById("mount"));
//# sourceMappingURL=index.js.map