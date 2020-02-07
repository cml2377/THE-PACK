$(document).ready(function () {
	//===========================================================================
	//          The main page! This is the homepage the user is
	//          directed to after logging in. Holds markers. 
	//===========================================================================
	const axios = require("axios");

	// This file just does a GET request to figure out which user is logged in
	// and updates the HTML on the page
	$.get("/api/user_data").then(function (data) {
		$(".member-name").text(data.email);
	});

	// This slider toggles the background image from a motorcycle to a car.
	$(".slider").click(function () {
		$("#backgroundImageInDiv").toggleClass("active");
	});

	// =========================================================

	// This populates a dropdown with vehicle variables in the modal.
	let dropdown = $("#vehicleVariables");

	dropdown.empty();

	dropdown.append("<option>Define parts...</option>");
	dropdown.prop("selectedIndex", 0);

	const url = "https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist";

	// Populate dropdown with list of part names
	$.getJSON(url, function (data) {
		$.each(data, function (key, entry) {
			dropdown.append($("<option></option>").attr("value", entry.abbreviation).text(entry.name));
		});
	});

	//==========================================================

	// This prompts the user for their location. This is for EVENTS.
	var options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
	};

	function success(pos) {
		var crd = pos.coords;
		//if user provides geolocation: 
		console.log("Your current position is:");
		console.log(`Latitude : ${crd.latitude}`);
		console.log(`Longitude: ${crd.longitude}`);
		console.log(`More or less ${crd.accuracy} meters.`);
		axios.post("/", { // We call for the information from the back-end using the front-end"s provided location.
			data: { latitude: crd.latitude, longitude: crd.longitude }
		}).then(function (response) {
			//Log the resulting object
			console.log(response);
		});
	}

	function error(err) {
		console.warn(`ERROR(${err.code}): ${err.message}`);
		//if user denies geolocation, run Austin as default.
	}
	navigator.geolocation.getCurrentPosition(success, error, options);

});