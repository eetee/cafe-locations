"use strict";
const initialState = {};
function appStore(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }
    return state;
}
exports.appStore = appStore;
//# sourceMappingURL=reducer.js.map