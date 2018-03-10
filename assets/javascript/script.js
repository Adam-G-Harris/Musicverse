// Initialize Firebase
var config = {
    apiKey: "AIzaSyA3Wi8pjiM9gWl9vpYE8wzuiApYb2d_s8I",
    authDomain: "musicverse-e0621.firebaseapp.com",
    databaseURL: "https://musicverse-e0621.firebaseio.com",
    projectId: "musicverse-e0621",
    storageBucket: "musicverse-e0621.appspot.com",
    messagingSenderId: "179210130029"
  };
  firebase.initializeApp(config);

window.onload = () => {

    const navTabs = document.getElementsByClassName('nav-item');

    const pages = document.getElementsByClassName('page');

    for (let i = 0; i < navTabs.length; i++) {

        navTabs[i].addEventListener('click', changePage);
    }

    function changePage(e) {

        let text = e.target.textContent;

        for (let i = 0; i < pages.length; i++) {

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