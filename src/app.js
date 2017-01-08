Number.prototype.toRadians = function() {
   return this * Math.PI / 180;
};

Number.prototype.toDegrees = function() {
   return this / Math.PI * 180;
};

app.main = function(){
  app.getCurrentLocation(function(location){
    app.currentLocation = location.coords;

    let testTarget = app.parseLocation(app.locations[0]);

    let currentPosition = new LatLon(app.currentLocation.longitude, app.currentLocation.latitude);
    let targetPosition = new LatLon(testTarget.longitude, testTarget.latitude);
    let distance = currentPosition.distanceTo(targetPosition);

    alert(distance);

  });
};

app.parseLocation = function(locationData){
  return {
    name: locationData[1],
    address: locationData[0],
    type: locationData[2],
    longitude: parseInt(locationData[4], 10),
    latitude: parseInt(locationData[3], 10),
    position: locationData[5],
  };
};

app.getCurrentLocation = function(cb){
  if (!navigator.geolocation) console.error('Geolocation is not supported by this browser.');
  return navigator.geolocation.getCurrentPosition(cb);
};

app.main();
