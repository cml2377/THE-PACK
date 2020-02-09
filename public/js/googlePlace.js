const googleBtnEl = $("#googleBtn");
const googleDivEl = $("#googleDiv");

$(googleBtnEl).on("click", function () {
	googleDivEl.empty();
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


