/*
Where base location code came from
https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
*/
var x = document.getElementById("errorMsgLabel");

function success(pos) {
  var crd = pos.coords;

  setME(crd.longitude, crd.latitude, 'locationAllowed');

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  //console.warn(`ERROR(${err.code}): ${err.message}`);
  var errMsg = "'" + err.message + "'";
  //console.log(errMsg);
  setME(35.237977,31.7805979,errMsg);
}

var options = {
  maximumAge:Infinity, 
  timeout:60000
};

navigator.geolocation.getCurrentPosition(success, error, options);

function setME(la, lo, ls) {
  //console.log("values set:" + lo,la,ls);

  var t = document.getElementById('Latitude');
  t.setAttribute("value", la);
  
  var s = document.getElementById('Longitude');
  s.setAttribute("value", lo);

  var u = document.getElementById('locationStatus');
  u.setAttribute("value",ls);

  //console.log(s);
  //console.log(t);
  //console.log(u);
}