"use strict";
const react_redux_1 = require("react-redux");
const StoreList_1 = require("../components/StoreList");
function mapStateToProps(state, ownProps) {
    return {
        stores: state.app.locations
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {};
}
exports.StoreListContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(StoreList_1.StoreList);
//# sourceMappingURL=StoreListContainer.js.map