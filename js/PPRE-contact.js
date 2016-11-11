//CODE TO ADD A NEW SELCTOR IN THE EVENT OF INTEREST IN RENTING A PROPERTY

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
