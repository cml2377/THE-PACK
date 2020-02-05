$(document).ready(function () {
	// Getting references to our form and input
	var signUpForm = $("form.signup");
	var emailInput = $("input#email-input");
	var passwordInput = $("input#password-input");

	// When the signup button is clicked, we validate the email and password are not blank
	signUpForm.on("submit", function (event) {
		event.preventDefault();
		var userData = {
			email: emailInput.val().trim(),
			password: passwordInput.val().trim()
		};

		if (!userData.email || !userData.password) {
			return;
		}
		// If we have an email and password, run the signUpUser function
		signUpUser(userData.email, userData.password);
		emailInput.val("");
		passwordInput.val("");
	});

	// Does a post to the signup route. If successful, we are redirected to the members page
	// Otherwise we log any errors
	function signUpUser(email, password) {
		$.post("/api/signup", {
			email: email,
			password: password
		})
			.then(function () {
				window.location.replace("/members");
				// If there's an error, handle it by throwing up a bootstrap alert
			})
			.catch(handleLoginErr);
	}

	function handleLoginErr(err) {
		$("#alert .msg").text(err.responseJSON);
		$("#alert").fadeIn(500);
	}

	// Function that toggles background image of application.
	function toggleBackgroundImage() {
		$(".slider").click(function () {
			var imageURL = "../img/nathan-trampe-cyIERGMF_1U-unsplash.jpg";
			$(".backgroundImg").css("background-image", "url(" + imageURL + ")");
		});
	}
	toggleBackgroundImage();
});
 
// Get the modal
var modal = document.getElementById("modal-left");

// Get the button that opens the modal
var btn = document.getElementById("btn-left");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
	modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};