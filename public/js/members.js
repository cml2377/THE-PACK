// var vinchecker = require("./vinchecker.js");

$(document).ready(function () {
	// This file just does a GET request to figure out which user is logged in
	// and updates the HTML on the page
	$.get("/api/user_data").then(function (data) {
		$(".member-name").text(data.email);
	});

	$(".slider").click(function () {
		$("#backgroundImageInDiv").toggleClass("active");
	});

	// Searching for vehicle by VIN
	$(".vin-search").click(function () {
		var data = $("#vin-input").val();
		console.log(data);
		// vinchecker();
	});
});
