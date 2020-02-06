// module.exports = function () {




//     // const express = require("express");
//     require("dotenv").config();
//     const inquirer = require("inquirer");
//     const axios = require("axios");
//     const connection = require("../../config/config.json");

//     inquirer
//         .prompt([
//             {
//                 name: "vehicleVin",
//                 type: "prompt",
//                 message: "Please enter the vehicle's VIN"
//             }
//         ]).then(function (data) {
//             vinSearch(data);
//         });

//     function vinSearch(data) {
//         axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${data.vehicleVin}?format=json`)
//             .then(function (response) {
//                 connection.query("INSERT INTO Cars SET ?",
//                     {
//                         make: response.data.Results[6].Value,
//                         model: response.data.Results[8].Value,
//                         year: response.data.Results[9].Value,
//                         plantCountry: response.data.Results[14],
//                         series: response.data.Results[18].Variable
//                     });
//             })
//             .catch(error => {
//                 console.log(error);
//             });
//     }

// }