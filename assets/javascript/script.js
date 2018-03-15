window.onload = () => {

    // --------------- Page changing functionality --------------- //

    const navTabs = document.getElementsByClassName('nav-item');

    const pages = document.getElementsByClassName('page');

    const mainNav = document.getElementById('main-nav');

    for (let i = 0; i < navTabs.length; i++) {

        navTabs[i].addEventListener('click', changePage);
    }

    function changePage(e) {

        let text = e.target.textContent;

        for (let i = 0; i < pages.length; i++) {

            if (text.toLowerCase() === 'home') {

                mainNav.style.position = 'absolute';
                mainNav.style.color = 'white';

            } else {

                mainNav.style.position = 'relative';
                mainNav.style.color = 'black';
            }

            text.toLowerCase() === pages[i].attributes[2].nodeValue ?
                pages[i].style.display = 'initial' :
                pages[i].style.display = 'none';
        }
    }

    function pageLoadSet() {

        for (let i = 0; i < pages.length; i++) {

            pages[i].attributes[2].nodeValue === 'home' ?
                pages[i].style.display = 'initial' :
                pages[i].style.display = 'none';
        }
    }

    function init() {

        pageLoadSet();
    }

    init();
};

//Logic for BandsInTown API Call//
function searchBandsInTown(artist) {
    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Printing the entire object to console
        console.log(response);

        // Constructing HTML containing the artist information
        var artistName = $("<h1>").text(response.name);
        var artistURL = $("<a>").attr("href", response.facebook_page_url).append(artistName);
        var artistImage = $("<img>").attr("src", response.thumb_url);




        // Empty the contents of the artist-div, append the new artist content
        $("#artist-div").empty();
        $("#artist-div").append(artistURL, artistImage);
    });

}

// Event handler for user clicking the select-artist button
$("#select-artist").on("click", function (event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var inputArtist = $("#artist-input").val().trim();

    // Running the searchBandsInTown function (passing in the artist as an argument)
    searchBandsInTown(inputArtist);
});