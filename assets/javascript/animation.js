window.onload = () => {

    // --------------- Anime.js functions --------------- //

    const els = document.querySelectorAll('#nodeList .el');

    anime({
        targets: els,
        translateX: 250
    });

    anime({
        targets: '#lineDrawing .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        delay: function (el, i) {
            return i * 250
        }
    });
};