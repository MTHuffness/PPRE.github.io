//-------------------------------------------------------------------------------------------
//HOME JAVASCRIPT
    //HOME IMAGE CAROUSEL
    var slideInterval = 3500;

    function getFigures() {
        return document.getElementById('carousel').getElementsByTagName('figure');
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
//------------------------------------------------------------------------------
    //CONTACT JAVASCRIPT

        //CODE TO ADD A NEW SELECTOR IN THE EVENT OF INTEREST IN RENTING A PROPERTY

    function dropDown(that) {
        if (that.value == "3") {
            document.getElementById("chooseProperty").style.display = "block";
            document.getElementById("contactinfo").style.minHeight = "48rem";
        }
        else {
            document.getElementById("chooseProperty").style.display = "none";
            document.getElementById("contactinfo").style.minHeight = "43rem";
        }
    }