//-------------------------------------------------------------------------------------------
//HOME JAVASCRIPT
$(document).ready(function() {
    //HOME IMAGE CAROUSEL

  var options = {
    speed: 700,
    autoswitch: true,
    autoswitch_speed: 2500
  }

  // Add active class to the first slide
  $('.slide').first().addClass('active');

  // Hide all slides
  $('.slide').hide();

  // Show active slide
  $('.active').show();

  // Click event on #next
  $('#next').on('click', nextSlide);

  // Click event on #prev
  $('#prev').on('click', prevSlide);

  // Auto slider
  if (options.autoswitch === true) {
    setInterval(nextSlide, options.autoswitch_speed);
  }

  function nextSlide() {
    $('.active').removeClass('active').addClass('prevActive');    // remove active class and add prevActive class

    if ($('.prevActive').is(':last-child')) {   // if last slide, add active class to the first slide
      $('.slide').first().addClass('active');
    } else {                    // else, add active class to next slide
      $('.prevActive').next().addClass('active');
    }

    $('.prevActive').removeClass('prevActive');   // remove prevActive class after active class is added
    $('.slide').fadeOut(options.speed);       // fade out the current slide
    $('.active').fadeIn(options.speed);       // fade in the new slide
  }

  function prevSlide() {
    $('.active').removeClass('active').addClass('prevActive');    // remove active class and add prevActive class

    if ($('.prevActive').is(':first-child')) {    // if last slide, add active class to the first slide
      $('.slide').last().addClass('active');
    } else {                    // else, add active class to next slide
      $('.prevActive').prev().addClass('active');
    }
    
    $('.prevActive').removeClass('prevActive');   // remove prevActive class after active class is added
    $('.slide').fadeOut(options.speed);       // fade out the current slide
    $('.active').fadeIn(options.speed);       // fade in the new slide    
  }


//------------------------------------------------------------------------------
    //CONTACT JAVASCRIPT

        //CODE TO ADD A NEW SELECTOR IN THE EVENT OF INTEREST IN RENTING A PROPERTY

    function dropDown(that) {
        if (that.value == "3") {
            document.getElementById("chooseProperty").style.display = "block";
            document.getElementById("contactinfo").style.minHeight = "50rem";
        }
        else {
            document.getElementById("chooseProperty").style.display = "none";
            document.getElementById("contactinfo").style.minHeight = "43rem";
        }
    }

//jQUERY-------------------------------------------------------------------------

//PIKES PEAK BACKGROUND PHOTO FADE IN
    $('#pikespeak').fadeIn(1200);
    $('#box').delay(1000).fadeIn(1000);

//CONTACT PAGE FADE-IN & SLIDE DOWN
    $('#contactcompanyinfo').hide().delay(400).effect('slide', 'left', 1000);
    $('#contactform').hide().delay(1400).fadeIn(1000);

});