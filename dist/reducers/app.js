"use strict";
const storeLocations = require('../data/supreme');
const actions_1 = require("../actions/actions");
const redux_1 = require("redux");
exports.initialState = {
    locations: storeLocations,
    currentLocation: {
        longitude: 123,
        latitude: 456
    }
};
function app(state, action) {
    if (typeof state === 'undefined') {
        return exports.initialState;
    }
    switch (action.type) {
        case actions_1.actions.SET_CURRENT_LOCATION:
            return Object.assign({}, state, {
                currentLocation: action.currentLocation,
                locations: action.stores
            });
    }
    return state;
}
exports.rootReducer = redux_1.combineReducers({
    app
});
//# sourceMappingURL=app.js.map