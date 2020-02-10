let car = {};
let motorcycle = {};
const favoritesBtn = $(".add-to-favorites");
const favoritesMarker = $("#favoritesMarker");
const faveVehiclesEl = $("#listOfFaveVehicles");


let html;

$(".vin-search").click(function () {
    var data = $("#vin-input").val();
    console.log(data);
    vinchecker(data);
});

favoritesBtn.click(function () {
    postFavorite();
});

var vinchecker = function (vin) {
    var queryURL = `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`;
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            if (response.Results[13].Value !== "MOTORCYCLE") {
                let carSearch = {
                    category: "Car",
                    make: response.Results[6].Value,
                    model: response.Results[8].Value,
                    year: response.Results[9].Value,
                    plant: response.Results[14].Value,
                    series: response.Results[11].Value
                };
                html = `
                    <h3 class = "vin-alert" id = "vehicle-category">Car</h3>
                    <p class = "vehicle-info" id = "vehicle-make">${carSearch.make}</p>
                    <p class = "vehicle-info" id = "vehicle-model">${carSearch.model}</p>
                    <p class = "vehicle-info" id = "vehicle-year">${carSearch.year}</p>
                    <p class = "vehicle-info" id = "vehicle-plant">${carSearch.plant}</p>
                    <p class = "vehicle-info" id = "vehicle-series">${carSearch.series}</p>
            `;
                $("#vehicle-display").empty();
                $("#vehicle-display").append(html);
                car = carSearch;
                console.log(car);
            } else {
                console.log("It's a motorcycle!");
                let hogSearch = {
                    category: "Motorcycle",
                    make: response.Results[6].Value,
                    model: response.Results[8].Value,
                    year: response.Results[9].Value,
                    plant: response.Results[14].Value,
                    series: response.Results[11].Value
                };
                html = `
                    <h3 class = "vin-alert" id = "vehicle-category">Motorcycle</h3>
                    <p class = "vehicle-info" id = "vehicle-make">${hogSearch.make}</p>
                    <p class = "vehicle-info" id = "vehicle-model">${hogSearch.model}</p>
                    <p class = "vehicle-info" id = "vehicle-year">${hogSearch.year}</p>
                    <p class = "vehicle-info" id = "vehicle-plant">${hogSearch.plant}</p>
                    <p class = "vehicle-info" id = "vehicle-series">${hogSearch.series}</p>
            `;
                $("#vehicle-display").empty();
                $("#vehicle-display").append(html);
                motorcycle = hogSearch;
                console.log(motorcycle);
            }
        })
        .then(function () {
            favoritesBtn.attr("style", "display: block");
        })
        .catch(error => {
            console.log(error);
        });
};

function postFavorite() {
    const fav = {
        category: $("#vehicle-category").text(),
        make: $("#vehicle-make").text(),
        model: $("#vehicle-model").text(),
        year: $("#vehicle-year").text(),
        plant: $("#vehicle-plant").text(),
        series: $("#vehicle-series").text()
    };
    console.log(fav);
    $.post("/api/favorites", fav)
        .then(function () {
            console.log("Favorite posted!");
        });
}

favoritesMarker.click(function () {
    console.log("HELLO");
    faveVehiclesEl.empty();
    $.get("/api/favorites", function (data, res) {
        // console.log(req);
        console.log(res);
        for (var i = 0; i < data.length; i++) {
            const ptagEl = $("<p>");
            // const removeBtn = $("<button>");
            ptagEl.text("Make: " + data[i].make + "\n" + " Model: " + data[i].model + " " + " Year: " + data[i].year + " " + "Series: " + data[i].series);
            faveVehiclesEl.append(ptagEl);

        }

    });
    //  
});
