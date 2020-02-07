$(document).ready(function () {
	//===========================================================================
	//          The main page! This is the homepage the user is
	//          directed to after logging in. Holds markers. 
	//===========================================================================


	var UIkit = require("./uikit.min.js");


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

	// Populate dropdown with list of part names
	$("select[data-source]").each(function () {
		var $select = $(this);


		$select.append("<option></option>");

		$.ajax({
			url: "https://cors-ut-bootcamp.herokuapp.com/https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist",
			method: "GET"
		}).then(function (response) {
			console.log(response);
			for (var i = 0; i < response.Results.length; i++) {
				const dropdown = response.Results[i].Name;
				$("#vehicleVariables").text(dropdown);
			}// When the user picks a vehicle variable, the definition of the variable is displayed in the div variableResults 
			var vehicleDef = response.Results[i].Description;
			$("#variableResults").html(vehicleDef);
		});
	});

	//========================================================== 
	// 				Media Queries
	var mql = window.matchMedia("screen and (maxwidth: 768px)");
	mql.addListener(function (viewSize) {
		if (viewSize.matches) {
			UIkit.tooltip("title").show();
		}
		else {
			console.log("Not on mobile");
		}
	});

	//==========================================================


});