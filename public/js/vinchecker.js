$(".vin-search").click(function () {
    var data = $("#vin-input").val();
    console.log(data);
    var car = vinchecker(data);
});

vinchecker = function (vin) {
    var queryURL = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            let car = {
                make: response.Results[6].Value,
                model: response.Results[8].Value,
                year: response.Results[9].Value,
                plantCity: response.Results[14].Value,
                series: response.Results[18].Variable
            }
            console.log(car);
        })
        .catch(error => {
            console.log(error);
        });
}

var logCar = function (car) {
    console.log(car);
}