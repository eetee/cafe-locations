"use strict";
const LatLon = require("geodesy/latlon-spherical");
exports.actions = {
    SET_CURRENT_LOCATION: 'SET_CURRENT_LOCATION',
};
function calculateDistance(currentLocation, storeLocation) {
    let currentLoc = LatLon(currentLocation.latitude, currentLocation.longitude);
    let storeLoc = LatLon(storeLocation.latitude, storeLocation.longitude);
    return currentLoc.distanceTo(storeLoc) / 1000;
}
function setCurrentLocation(currentLocation, state) {
    let locations = state.app.locations.map((location) => {
        location.distance = calculateDistance(currentLocation, {
            latitude: location.latitude,
            longitude: location.longitude
        });
        return location;
    });
    locations.sort((a, b) => {
        let diff = a.distance - b.distance;
        if (diff > 0)
            return 1;
        if (diff < 0)
            return -1;
        return 0;
    });
    return {
        type: exports.actions.SET_CURRENT_LOCATION,
        currentLocation,
        stores: locations
    };
}
exports.setCurrentLocation = setCurrentLocation;
function getCurrentLocation() {
    return (dispatch, getState) => {
        if (!navigator.geolocation) {
            console.error('Geolocation is not supported by this browser.');
            return;
        }
        const successCallback = (location) => {
            let currentLocation = {
                longitude: location.coords.longitude,
                latitude: location.coords.latitude
            };
            dispatch(setCurrentLocation(currentLocation, getState()));
        };
        const errorCallback = (positionError) => {
            console.error(positionError);
        };
        return navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    };
}
exports.getCurrentLocation = getCurrentLocation;
//# sourceMappingURL=actions.js.map