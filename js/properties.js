//PROPERTIES / VACANCIES JAVASCRIPT

    //HAVE JAVASCRIPT SHOW BIRCHWOOD PROPERTIES ONCE THE IMG IS CLICKED

    //CAROUSEL CODE FOR EACH PROPERTY
    //BIRCHWOOD-----------------------------------------------------
    var slideInterval = 3500;

    function getFigures() {
        return document.getElementById('birchwoodImage').getElementsByTagName('figure');
    }

    function moveForward() {
        var pointer;
        var figures = getFigures();
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
        setTimeout(moveForward, slideInterval);
    }

    function startPlayback() {
        setTimeout(moveForward, slideInterval);
    }

    startPlayback();

    //FOUNTIAN TERRACE-----------------------------------------------------
    var slideIntervalft = 3500;

    function getFiguresft() {
        return document.getElementById('ftImage').getElementsByTagName('figure');
    }

    function moveForwardft() {
        var pointer;
        var figures = getFiguresft();
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
        setTimeout(moveForwardft, slideIntervalft);
    }

    function startPlaybackft() {
        setTimeout(moveForwardft, slideIntervalft);
    }

    startPlaybackft();  

    //PINEWOOD VILLAGE-----------------------------------------------------
    var slideIntervalpw = 3500;

    function getFigurespw() {
        return document.getElementById('pinewoodImage').getElementsByTagName('figure');
    }

    function moveForwardpw() {
        var pointer;
        var figures = getFigurespw();
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
        setTimeout(moveForwardpw, slideIntervalpw);
    }

    function startPlaybackpw() {
        setTimeout(moveForwardpw, slideIntervalpw);
    }

    startPlaybackpw(); 

    //CODE TO DISPLAY POP-UP WINDOW TO VIEW FULL GALLERY OF PHOTOS
    function pullBirchwoodGallery() {
        window.open("birchwoodgallery.html","",
        "width=900,height=750");
    }
    function pullFTGallery() {
        window.open("ftgallery.html","",
        "width=900,height=750");
    }    
    function pullPinewoodGallery() {
        window.open("pinewoodgallery.html","",
        "width=900,height=750");
    }

    //CODE TO DIRECT USER TO PRECISE CONTACT PAGE AFTER CLICKING CONTACT PROPERTY
    function birchwoodDirect() {
        window.open("contactbirchwood.html","", "width=500, height=800");
    }
    function FountainTerraceDirect() {
        window.open("contactft.html","", "width=500, height=800");
    }
    function pinewoodDirect() {
        window.open("contactpinewood.html","", "width=500, height=800");
    }

    //CODE TO ENLARGE PHOTOS IN PROPERTY GALLERY PAGE
    //BIRCHWOOD GALLERY
        function showImage(picSrc) {
            document.getElementById('largeImg').src = picSrc;
            document.getElementById('galleryTable').style.display = 'none';
            document.getElementById('largeImagePanel').style.display = 'block';
            document.getElementById('mainGalleryLink').style.display = 'none';
        }
        function revertTable() {
            document.getElementById('largeImagePanel').style.display = 'none';
            document.getElementById('galleryTable').style.display = 'block';
            document.getElementById('mainGalleryLink').style.display = 'block';
        }

//JQUERY---------------------------------------------------------------------------

$(document).ready(function() {
    $('#propertyHousing').fadeIn(1200);
    $('#propSummary1').click(function() {
        $('#propDetail1').slideDown(1200);
        window.location("#movePageLower");
        $('#propDetail2, #propDetail3, #propDetail4').hide();
    })
    $('#propSummary2').click(function() {
        $('#propDetail2').slideDown(1200);
        $('#propDetail1, #propDetail3, #propDetail4').hide();
    })
    $('#propSummary3').click(function() {
        $('#propDetail3').slideDown(1200);
        $('#propDetail2, #propDetail1, #propDetail4').hide();
    })
    $('#propSummary4').click(function() {
        $('#propDetail4').slideDown(1200);
        $('#propDetail2, #propDetail3, #propDetail1').hide();
    })
})