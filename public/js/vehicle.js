const googleBtnEl = $("#googleBtn");
const googleDivEl = $("#googleDiv");
// const axios = require("axios");
	// This prompts the user for their location. This is for EVENTS.
	// var options = {
	// 	enableHighAccuracy: true,
	// 	timeout: 5000,
	// 	maximumAge: 0
	// };

	// function success(pos) {
	// 	var crd = pos.coords;
	// 	//if user provides geolocation: 
	// 	console.log("Your current position is:");
	// 	console.log(`Latitude : ${crd.latitude}`);
	// 	console.log(`Longitude: ${crd.longitude}`);
	// 	console.log(`More or less ${crd.accuracy} meters.`);
	// 	axios.post("/", { // We call for the information from the back-end using the front-end"s provided location.
	// 		data: { latitude: crd.latitude, longitude: crd.longitude }
	// 	}).then(function (response) {
	// 		//Log the resulting object
	// 		console.log(response);
	// 	});
	// }

	// function error(err) {
	// 	console.warn(`ERROR(${err.code}): ${err.message}`);
	// 	//if user denies geolocation, run Austin as default.
	// }
	// navigator.geolocation.getCurrentPosition(success, error, options);


$(googleBtnEl).on("click", function () {
  console.log("GOOOOOOOOOGLE");

  $.ajax("/api/events/cars").done(function (response) {
    console.log(response);
    for (var i = 0; i < 5; i++) {
      const places = response[i];
      // console.log(places.name);
      const ptagEl = $("<p>");
      ptagEl.text(places.name);
      googleDivEl.append(ptagEl);
      console.log(places.photos);
    }

  });
});


