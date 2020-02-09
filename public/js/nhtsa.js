$(document).ready(function () {
    $("#nhtsa-btn").click(function () {
        var make = $("#userMake").val();
        var model = $("#userModel").val();
        var year = $("#userYear").val();
        recallSearch(make, model, year);
    });

    function recallSearch(make, model, year) {

        $.ajax(`https://cors-ut-bootcamp.herokuapp.com/https://one.nhtsa.gov/webapi/api/Recalls/vehicle/modelyear/${year}/make/${make}/model/${model}?format=json`).done(function (response) {
            for (let index = 0; index < response.data.Results.length; index++) {
                const recall = response.data.Results[index];
                let batman = `
                <div>
                <p class = "recallInfo">Year: ${recall.ModelYear}</p>
                <p class = "recallInfo">Make: ${recall.Make}</p>
                <p class = "recallInfo">Model: ${recall.Model}</p>
                <p class = "recallInfo">Recalled Part: ${recall.Component}</p>
                <p class = "recallInfo">Summary: ${recall.Summary}</p>
                <p class = "recallInfo">Solution: ${recall.Remedy}</p>
                </div>`;
                $("#recallResults").append(batman);
            }
        });
    }
});