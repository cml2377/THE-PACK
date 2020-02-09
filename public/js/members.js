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

	// Populate dropdown with list of part names

	let userSelectedDesc = {};

	$.ajax({
		url: "https://cors-ut-bootcamp.herokuapp.com/https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json",
		method: "GET"
	}).then(function (response) {
		for (var i = 0; i < response.Results.length; i++) {
			const partName = response.Results[i].Name;
			const ID = response.Results[i].ID;
			$("#vehicleVariables").append("<option value=" + ID + ">" + partName + "</option>");
			userSelectedDesc[ID] = response.Results[i].Description;
		}
	});

	dropdown.change(function () {
		// When the user picks a name, the explanation of the variable is displayed in the div variableResults. This is based on each option's value(ID). 
		console.log(this.value);
		var value = this.value;
		$("#variableResults").empty().append(userSelectedDesc[value]);

	});


	// ========================================================== 
					// Media Queries
	// var mql = window.matchMedia("screen and (maxwidth: 768px)");
	// mql.addListener(function (viewSize) {
	// 	if (viewSize.matches) {
	// 		UIkit.tooltip("title").show();
	// 	}
	// 	else {
	// 		console.log("Not on mobile");
	// 	}
	// });

	//==========================================================

});