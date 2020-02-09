$(document).ready(function () {

    $(".recallSearch-btn").click(function () {
        // var data = $("#userYear").val();
        // console.log(data);
        var make = $("#userMake").val();
        var model = $("#userModel").val();
        var year = $("#userYear").val();
        recallSearch(make, model, year);
    });

    function recallSearch(make, model, year) {
        // axios.get("https://one.nhtsa.gov/webapi/api/Recalls/vehicle/modelyear/2017/make/infiniti/model/q50?format=json")    
        axios.get(`https://cors-ut-bootcamp.herokuapp.com/https://one.nhtsa.gov/webapi/api/Recalls/vehicle/modelyear/${year}/make/${make}/model/${model}?format=json`)
            // axios.get("https://one.nhtsa.gov/webapi/api/Recalls/vehicle/modelyear/2017/make/infiniti/model/q50?format=json")


            .then(function (response) {

                for (let index = 0; index < response.data.Results.length; index++) {
                    const recall = response.data.Results[index];

                    let batman = `
                <div>
                <p class = "recallInfo">${recall.ModelYear}</p>
                <p class = "recallInfo">${recall.Make}</p>
                <p class = "recallInfo">${recall.Model}</p>
                <p class = "recallInfo">${recall.Component}</p>
                <p class = "recallInfo">${recall.Summary}</p>
                <p class = "recallInfo">${recall.Remedy}</p>
                </div>`;

                    $("#recallResults").append(batman);
                }
            });
    }
});