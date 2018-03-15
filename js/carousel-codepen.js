// Get carousel elements

var tLeftButton = $("#testimonials-l");
var tRightButton = $("#testimonials-r");

// Get number of <li> elements in carousel

var tItemCount = document.getElementById('testimonials-ul').querySelectorAll('li').length;

// Set length based on that and differing from device used
var slideSize = 50;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    slideSize = 100;
}
var tWidth = tItemCount * slideSize + "vw";
$(".testimonials ul").css("width", tWidth);

// Button functionality

var tPosition = 0;

tRightButton.click(function() {
    if (tPosition < (tItemCount - 1)) {
        tPosition++;
        var m = "-" + (slideSize * tPosition) + "vw";
        $(".testimonials ul").animate({
            "left": m
        }, 500);
        greyButton();
    }
});

tLeftButton.click(function() {
    if (tPosition > 0) {
        tPosition--;
        var m = "-" + (slideSize * tPosition) + "vw";
        $(".testimonials ul").animate({
            "left": m
        }, 500);
        greyButton();
    }
});

// Grey out buttons if not useable

var greyButton = function() {
    if (tPosition == 0) {
        tLeftButton.css("opacity", "0.3");
        tLeftButton.css("cursor", "default");
    } else if (tPosition == (tItemCount - 1)) {
        tRightButton.css("opacity", "0.3");
        tRightButton.css("cursor", "default");
    } else {
        tRightButton.css("opacity", "1");
        tRightButton.css("cursor", "pointer");
        tLeftButton.css("opacity", "1");
        tLeftButton.css("cursor", "pointer");
    }
};

greyButton();

// And finally, if there's only one quote, kill the buttons altogether

if ( tItemCount == 1 ) {
    $('.testimonials-control').css('display','none');
}

