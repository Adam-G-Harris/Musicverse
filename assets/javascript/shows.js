//Shows page script starts here

const temp = document.getElementById('temp');

function searchBandsInTown(artist) {

  $.ajax({
      method: "GET",
      url: "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=1VJKJTqp0WTGYhSG3JACStAvdDDvq4CR&keyword='" + artist + "'",
    })
    .then(function (json) {
      temp.style.display = 'block';
      var cList = $('ul.list-group')
      $.each(json._embedded.events, function (i) {
        var cityState = `${json._embedded.events[i]._embedded.venues[0].city.name}, ${json._embedded.events[i]._embedded.venues[0].state.name}`
        var li = $('<li/>')
          .addClass("lineItemStyle", 'ui-menu-item')
          .attr('role', 'menuitem')
          .appendTo(cList);
        var artistImage = $("<img>").attr("src", json._embedded.events[i].images[4].url).addClass('img-fluid').appendTo(li);
        var artistName = $("<h1>").text(json._embedded.events[i].name).appendTo(li);
        var tourLocale = $("<h3>").text(cityState).appendTo(li);
        var tourVenue = $("<h4>").text(json._embedded.events[i]._embedded.venues[0].name).appendTo(li);
        var tourDate = $("<h4>").text(json._embedded.events[i].dates.start.localDate).appendTo(li);
        var goTix = $("<input>").attr("onclick", `window.open("${json._embedded.events[i].url}")`).addClass('btn btn-primary invite').attr('target', '_blank').attr('type', 'button').attr('value', 'Get Tickets').appendTo(li);
        var invitePeeps = $("<input>").attr("onclick", `window.location.href='mailto:info@example.com?bcc=mail2@example.com&body=${json._embedded.events[i].url}%0AUse the link above to sign in and grab tickets for the show!'`).addClass('btn btn-primary invite').attr('target', '_blank').attr('type', 'button').attr('value', 'Invite Friends').appendTo(li);
      });
    });
}

// Event handler for user clicking the select-artist button
$("#select-artist").on("click", function (event) {
  // Preventing the button from trying to submit the form
  event.preventDefault();
  $(".list-group").empty();
  // Storing the artist name
  var inputArtist = $("#artist-input").val().trim();
  // Running the searchBandsInTown function (passing in the artist as an argument)
  searchBandsInTown(inputArtist);
});