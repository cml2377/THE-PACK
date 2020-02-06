$(document).ready(function () {

	const eventBriteBtnEl = $("#eventBriteBtn");
	// const eventFrameEl = $("#eventBriteFrame");
	// const eventBriteDivEl = $("#eventBriteDiv");
	// This file just does a GET request to figure out which user is logged in
	// and updates the HTML on the page
	$.get("/api/user_data").then(function (data) {
		$(".member-name").text(data.email);
	});

	$(".slider").click(function () {
		$("#backgroundImageInDiv").toggleClass("active");
	});

	$(eventBriteBtnEl).on("click", function () {
		// console.log("Creating Event Frame....hopefully");
		// eventFrameEl.attr("src", "https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=LV7ITGSKLPHYPZ5JE7&redirect_uri=https://www.eventbrite.com/d/tx--austin/motorcycle-shows/");
		// eventBriteDivEl.append(eventFrameEl);

		eventBrite();
	});
	function eventBrite() {

		// 	$.ajax({
		// 		url: "https://cors-ut-bootcamp.herokuapp.com/https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=LV7ITGSKLPHYPZ5JE7&redirect_uri=https://www.eventbrite.com/",
		// 		method: "GET"
		// 	}).then(function(response){ 
		// 		console.log(response)
		// 	})
		// };
		

		$.ajax({
			method: "GET",
			header: ('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept'),
			url: "https://cors-ut-bootcamp.herokuapp.com/https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=LV7ITGSKLPHYPZ5JE7&redirect_uri=https://www.eventbrite.com/",
			headers: {
				"Authorization": "Bearer " + eventBriteApiKey, 
				  
			}
		}) .then(function (response) {
			console.log(response);
		});
	};
});
