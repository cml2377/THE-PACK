// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var axios = require("axios");

module.exports = function (app) {
	// Using the passport.authenticate middleware with our local strategy.
	// If the user has valid login credentials, send them to the members page.
	// Otherwise the user will be sent an error
	app.post("/api/login", passport.authenticate("local"), function (req, res) {
		res.json(req.user);
	});

	// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
	// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
	// otherwise send back an error
	app.post("/api/signup", function (req, res) {
		db.User.create({
			email: req.body.email,
			password: req.body.password
		})
			.then(function () {
				res.redirect(307, "/api/login");
			})
			.catch(function (err) {
				res.status(401).json(err);
			});
	});

	// Route for logging user out
	app.get("/logout", function (req, res) {
		req.logout();
		res.redirect("/");
	});

	// Route for getting some data about our user to be used client side.
	app.get("/api/user_data", function (req, res) {
		if (!req.user) {
			// The user is not logged in, send back an empty object
			res.json({});
		} else {
			// Otherwise send back the user's email and id
			// Sending back a password, even a hashed password, isn't a good idea
			res.json({
				email: req.user.email,
				id: req.user.id
			});
		}
	});

	// // Route that creates a new Favorite vehicle in the database.
	app.post("/api/favorites", function (req, res) {
		console.log(" Look" + req.body);
		db.Favorite.create({
			category: req.body.category,
			make: req.body.make,
			model: req.body.model,
			year: req.body.year,
			series: req.body.series,
			plant: req.body.plant
		}).then(function (newFav) {
			console.log(newFav);
			res.json(newFav);
		});
	});


	// Route that gets all favorite vehicles from database.
	app.get("/api/favorites", function (req, res) {
		db.Favorite.findAll({}).then(function (newFav) {

			res.json(newFav);
		});
	});

	app.delete("/api/favorites:id", function (req, res) {

		// console.log(req);
		// console.log(res);
		db.Favorite.destroy({
			where: {
				id: req.params.id
			}
		}).then(function (newFav) {

			res.json(newFav);
		});
	});



	// Route that gets auto events near the user.
	app.get("/api/events/cars", function (req, res) {
		axios.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query=car+events&key=" + process.env.google_api).then(function (response) {
			res.json(response.data.results);
		});
	});

	app.delete("/api/favorites/:id", function (req, res) {
		db.Favorite.destroy({ where: { id: req.params.id } }).then(function (dbFavorite) {
			res.json(dbFavorite);
		});
	});
};