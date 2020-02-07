$(document).ready(function () {
	//===========================================================================
	//          The main page! This is the homepage the user is
	//          directed to after logging in. Holds markers. 
	//===========================================================================
	

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



});