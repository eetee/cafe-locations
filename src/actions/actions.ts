import * as LatLon from 'geodesy/latlon-spherical';

export const actions = {
  SET_CURRENT_LOCATION: 'SET_CURRENT_LOCATION',
}

function calculateDistance(currentLocation, storeLocation) {
  let currentLoc = LatLon(currentLocation.latitude, currentLocation.longitude);
  let storeLoc = LatLon(storeLocation.latitude, storeLocation.longitude);

  return currentLoc.distanceTo(storeLoc) / 1000;
}

export function setCurrentLocation(currentLocation:any, state) {
  let locations = state.app.locations.map((location)=>{
    location.distance = calculateDistance(currentLocation, {
      latitude: location.latitude,
      longitude: location.longitude
    });

    return location;
  });

  locations.sort((a, b)=>{
    let diff = a.distance - b.distance;
    if (diff > 0) return 1;
    if (diff < 0) return -1;

    return 0;
  });

  return {
    type: actions.SET_CURRENT_LOCATION,
    currentLocation,
    stores: locations
  };
}

export function getCurrentLocation(){
  return (dispatch, getState) => {
    if (!navigator.geolocation){
      console.error('Geolocation is not supported by this browser.');
      return;
    }

    const successCallback = (location:any) =>{
      let currentLocation = {
        longitude: location.coords.longitude,
        latitude: location.coords.latitude
      };

      dispatch(setCurrentLocation(currentLocation, getState()))

    };

    const errorCallback = (positionError) =>{
      console.error(positionError);
    };

    return navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }
}
