$(".vin-search").click(function () {
    var data = $("#vin-input").val();
    console.log(data);
    vinchecker(data);
});

var vinchecker = function (vin) {
    var queryURL = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`;
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
                series: response.Results[11].Value
            };
            var html = `
                    <p>${car.make}</p>
                    <p>${car.model}</p>
                    <p>${car.year}</p>
                    <p>${car.plantCity}</p>
                    <p>${car.series}</p>
            `;
            $("#car-display").empty();
            $("#car-display").append(html);
        })
        .catch(error => {
            console.log(error);
        });
};
