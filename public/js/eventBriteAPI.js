
var settings = {
    "url": "https://cors-ut-bootcamp.herokuapp.com/https://www.eventbriteapi.com/v3/subcategories/",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer KAWTBAB3KKKBTZGNHJFV"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });