// const express = require("express");
const inquirer = require("inquirer");
const axios = require("axios");

let make;
let model;
let year;
let plantCountry;
let series;

inquirer
	.prompt([
		{
			name: "vehicleVin",
			type: "prompt",
			message: "Please enter the vehicle's VIN"
		}
	]).then(function (data) {
		vinSearch(data);
	});

function vinSearch(data) {
	axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${data.vehicleVin}?format=json`)
		.then(function (response) {
			make = response.data.Results[6].Value;
			model = response.data.Results[8].Value;
			year = response.data.Results[9].Value;
			plantCountry = response.data.Results[14].Value;
			series = response.data.Results[18].Variable;
			// console.log(response.data);
			console.log(make);
			console.log(model);
			console.log(year);
			console.log(plantCountry);
			console.log(series);
		})
		.catch(error => {
			console.log(error);
		});
}
