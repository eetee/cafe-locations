"use strict";
const locations_1 = require("../data/locations");
const actions_1 = require("../actions/actions");
const redux_1 = require("redux");
exports.initialState = {
    locations: locations_1.locations.map((location) => {
        return {
            name: location[1],
            address: location[0],
            type: location[2],
            longitude: parseFloat(location[4]),
            latitude: parseFloat(location[3]),
            position: location[5],
            distance: 0
        };
    }),
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