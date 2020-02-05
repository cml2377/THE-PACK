$(document).ready(function () {
	// Getting references to our form and inputs
	var loginForm = $("form.login");
	var emailInput = $("input#email-input");
	var passwordInput = $("input#password-input");
	var googleSignIn = $(".g-signin2");

	// When the form is submitted, we validate there"s an email and password entered
	loginForm.on("submit", function (event) {
		event.preventDefault();
		var userData = {
			email: emailInput.val().trim(),
			password: passwordInput.val().trim()
		};

		if (!userData.email || !userData.password) {
			return;
		}

		// If we have an email and password we run the loginUser function and clear the form
		loginUser(userData.email, userData.password);
		emailInput.val("");
		passwordInput.val("");
	});

	// loginUser does a post to our "api/login" route and if successful, redirects us the the members page
	function loginUser(email, password) {
		$.post("/api/login", {
			email: email,
			password: password
		})
			.then(function () {
				window.location.replace("/members");
				// If there"s an error, log the error
			})
			.catch(function (err) {
				console.log(err);
			});
	}

	//========================================================================================================
	// Google Login; not working right now
	//========================================================================================================
	function onSignIn(googleUser) {
		var profile = googleUser.getBasicProfile();
		console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
		console.log("Name: " + profile.getName());
		console.log("Image URL: " + profile.getImageUrl());
		console.log("Email: " + profile.getEmail()); // This is null if the "email" scope is not present.
	}

	googleSignIn.on("click", function (event) {
		event.preventDefault();
		onSignIn();
	});
});
