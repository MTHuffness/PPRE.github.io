$(document).ready(function() {
    $('div').hide().fadeIn(1200);
        
    var mql = window.matchMedia("(max-width: 400px)");
    if (mql.matches) {
        $('#aboutpicture').hide();
    } else
        $('#aboutpicture').hide().delay(800).slideDown(1000);
});