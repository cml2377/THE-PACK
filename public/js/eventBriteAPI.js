function eventBrite() {
    
    $.ajax({
        url: "https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=LV7ITGSKLPHYPZ5JE7&redirect_uri=https://www.eventbrite.com/d/tx--austin/motorcycle-shows/",
        method: "GET"
    }).then(function(response){ 
        console.log(response)
    })
};
eventBrite();