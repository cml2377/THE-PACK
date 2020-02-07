const googleBtnEl = $("#googleBtn");
const googleDivEl = $("#googleDiv");


$(googleBtnEl).on("click", function () {
  console.log("GOOOOOOOOOGLE");
  const settings = {
    "url": "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=car+events&key=AIzaSyDfl4ckbrHuuNG0IdouW6Y70hrSxD1CMJE",
    "method": "GET",
    "timeout": 0,
  };

  $.ajax(settings).done(function (response) {
    console.log(response.results);
    for (var i = 0; i < response.results.length; i++) {
      const places = response.results[i];

      const nameEl = $("<p>");
      console.log(places.name);
      nameEl.text(places.name);
      googleDivEl.append(nameEl);

      const queryInput = places.name.replace(" ", "%20");
      console.log(queryInput);
      //take the name and manipulate into another ajax call to get the url
      const query = {
        "url": `https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${queryInput}&inputtype=textquery&fields=url&key=AIzaSyDfl4ckbrHuuNG0IdouW6Y70hrSxD1CMJE`,
        "method": "GET",
        "timeout": 0,
      };
      console.log(query);

    }

  });

});

