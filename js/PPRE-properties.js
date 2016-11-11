/*CAROUSEL ON HOME PAGE//////////////////////////////////////////////*/
var slideIntervalbw = 2500;

function getBirchwood() {
    return document.getElementById('birchwood-carousel').getElementsByTagName('figure');
}

function birchwoodForward() {
    var pointer;
    var figures = getBirchwood();
    for (var i = 0; i < figures.length; i++) {
        if (figures[i].className =='active') {
            figures[i].className = '';
            pointer = i;
        }
    }
    if (++pointer == figures.length) {
        pointer = 0;
    }
    figures[pointer].className = 'active';
    setTimeout(birchwoodForward, slideIntervalbw);
}

function startPlayback() {
    setTimeout(birchwoodForward, slideIntervalbw);
}

startPlayback();
