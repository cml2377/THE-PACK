const googleBtnEl = $("#googleBtn");
const googleDivEl = $("#googleDiv");


$(googleBtnEl).on("click", function(){
  console.log("GOOOOOOOOOGLE");
  var settings = {
    "url": "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=car+events&key=google_api_key",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response.results);
    for(var i = 0; i < response.results.length; i++) {
      const places = response.results[i];
      
      const nameEl = $("<p>");          
      console.log(places.name);     
      nameEl.text(places.name);      
      googleDivEl.append(nameEl);           
    }
    
  });
  
});

