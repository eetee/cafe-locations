"use strict";
const react_redux_1 = require("react-redux");
const CurrentLocation_1 = require("../components/CurrentLocation");
function mapStateToProps(state, ownProps) {
    return {
        longitude: state.currentLocation.longitude,
        latitude: state.currentLocation.latitude
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {};
}
exports.CurrentLocationContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CurrentLocation_1.CurrentLocation);
//# sourceMappingURL=LocationListContainer.js.map