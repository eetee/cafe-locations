"use strict";
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const app_1 = require("./reducers/app");
function configureStore(initialState) {
    return redux_1.createStore(app_1.rootReducer, initialState, redux_1.applyMiddleware(redux_thunk_1.default));
}
exports.configureStore = configureStore;
//# sourceMappingURL=configureStore.js.map