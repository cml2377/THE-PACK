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

	// Populate dropdown with list of part names
	$("select[data-source]").each(function () {
		var $select = $(this);

		$select.append("<option></option>");

		$.ajax({
			url: $select.attr("data-source"),
		}).then(function (options) {
			options.map(function (option) {
				var $option = $("<option>");

				$option
					.val(option[$select.attr("data-valueKey")])
					.text(option[$select.attr("data-displayKey")]);

				$select.append($option);
			});
		});
	});

	// When the user picks a vehicle variable, the definition of the variable is displayed in the div variableResults


	//==========================================================

});