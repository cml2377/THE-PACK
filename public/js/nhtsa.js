$(document).ready(function () {
    $("#nhtsa-btn").click(function () {
        var make = $("#userMake").val();
        var model = $("#userModel").val();
        var year = $("#userYear").val();
        recallSearch(make, model, year);
    });

    function recallSearch(make, model, year) {

        $.ajax({
            url: `https://cors-ut-bootcamp.herokuapp.com/https://one.nhtsa.gov/webapi/api/Recalls/vehicle/modelyear/${year}/make/${make}/model/${model}?format=json`,
            type: "GET",
        }).done(function (response) {
            $("#recallResults").empty();
            console.log(response);
            if (response.Count == 0) {
                $("#recallResults").append("No recalls found.");
            } else {
                for (let index = 0; index < response.Results.length; index++) {
                    const recall = response.Results[index];
                    let batman = `
                <div>
                <p class = "recallInfo">Year: ${recall.ModelYear}</p>
                <p class = "recallInfo">Make: ${recall.Make}</p>
                <p class = "recallInfo">Model: ${recall.Model}</p>
                <p class = "recallInfo">Recalled Part: ${recall.Component}</p>
                <p class = "recallInfo">Summary: ${recall.Summary}</p>
                <p class = "recallInfo">Solution: ${recall.Remedy}</p> <hr>
                </div>`;
                    $("#recallResults").append(batman);
                }
            }

        });
    }
});