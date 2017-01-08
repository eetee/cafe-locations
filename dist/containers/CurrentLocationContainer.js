"use strict";
const react_redux_1 = require("react-redux");
const CurrentLocation_1 = require("../components/CurrentLocation");
function mapStateToProps(state, ownProps) {
    return {
        longitude: state.app.currentLocation.longitude,
        latitude: state.app.currentLocation.latitude
    };
}
function mapDispatchToProps(dispatch, ownProps) {
    return {};
}
exports.CurrentLocationContainer = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CurrentLocation_1.CurrentLocation);
//# sourceMappingURL=CurrentLocationContainer.js.map