jQuery(document).on('ready', function ($) {
	"use strict";


	/* Read More option */
	$('.full-text').hide();
    $('.blog-item .read-more').click(function (event) {
        event.preventDefault();
        $(this).parent().find('.full-text').slideToggle('fast');
        $(this).text($(this).text() === 'Read Less' ? 'Read More' : 'Read Less');
    });
	/*--------------------------
	    SCROLLSPY ACTIVE
	---------------------------*/
	$('body').scrollspy({
		target: '.bs-example-js-navbar-scrollspy',
		offset: 65
	});


	/*--------------------------
	    STICKY MAINMENU
	---------------------------*/
	$("#mainmenu-area").sticky({
		topSpacing: 0
	});


	/*--------------------------
	    SMOOTH SCROLL
	----------------------------*/
	$(".push-menu-and-content").niceScroll({
		cursorwidth: "10px"
	});


	/*--------------------------
	   HOME PARALLAX BACKGROUND
	----------------------------*/
	$(window).stellar({
		responsive: true,
		positionProperty: 'position',
		horizontalScrolling: false
	});


	/*--------------------------
	    PUSH MENU OPEN COLOSE
	---------------------------*/
	var $content = $('.push-menu-and-content');
	$('.push-menu-open-button').on('click', function () {
		$content.addClass('menu-open');
	});
	$('.push-menu-close').on('click', function () {
		$content.removeClass('menu-open');
	});


	/*---------------------------
	    SMOOTH SCROLL
	-----------------------------*/
	$('ul#nav li a[href^="#"], .push-menu ul li a, a.navbar-brand,a.scrolltotop,.call-to-action a').on('click', function (event) {
		var id = $(this).attr("href");
		var offset = 40;
		var target = $(id).offset().top - offset;
		$('html, body').animate({
			scrollTop: target
		}, 1500, "easeInOutExpo");
		event.preventDefault();
	});


	/*----------------------------
	    SCROLL TO TOP
	------------------------------*/
	$(window).on("scroll", function () {
		var $totalHeight = $(window).scrollTop();
		var $scrollToTop = $(".scrolltotop");
		if ($totalHeight > 300) {
			$scrollToTop.fadeIn();
		} else {
			$scrollToTop.fadeOut();
		}
		if ($totalHeight + $(window).height() === $(document).height()) {
			$scrollToTop.css("bottom", "90px");
		} else {
			$scrollToTop.css("bottom", "20px");
		}
	});


	/*---------------------------
	    HOME SLIDER
	-----------------------------*/

	var $homeSlider = $('.welcome-slider-area');
	$homeSlider.owlCarousel({
		merge: true,
		smartSpeed: 1000,
		loop: true,
		nav: true,
		navText: ['<i class="icofont icofont-thin-left"></i>', '<i class="icofont icofont-thin-right"></i>'],
		autoplay: true,
		autoplayTimeout: 3000,
		margin: 0,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});
	$homeSlider.on("translate.owl.carousel", function () {
		$(".welcome-single-slide h1, .welcome-single-slide p, .welcome-single-slide .welcome-image-layer, .call-to-action").removeClass("animated fadeInUp").css("opacity", "0");


	});
	$homeSlider.on("translated.owl.carousel", function () {
		$(".welcome-single-slide h1, .welcome-single-slide p, .welcome-single-slide .welcome-image-layer, .call-to-action").addClass("animated fadeInUp").css("opacity", "1");
	});


	/* -------------------------------------------------------
     PROJECT FILTER SET ACTIVE CLASS FOR STYLE
    ----------------------------------------------------------*/
	$('.project-menu li').on('click', function (event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});


	/* ------------------------------
     PROJECT FILTERING
     -------------------------------- */
	$('.project-menu li').on('click', function () {
		$(this).addClass('active');
		var filterValue = $(this).attr('data-filter');

		$(".project-gallery").isotope({
			filter: filterValue,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
		return false;
	});


	/*---------------------------
        COUNTER UP TIMER
    -----------------------------*/
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});


	/*---------------------------
	    TESTMONIAL SLIDER
	-----------------------------*/
	var $testmonialCarousel = $('.testmonial-slider');
	$testmonialCarousel.owlCarousel({
		merge: true,
		smartSpeed: 1000,
		loop: true,
		nav: false,
		navText: ['<i class="icofont icofont-long-arrow-left"></i>', '<i class="icofont icofont-long-arrow-right"></i>'],
		autoplay: false,
		autoplayTimeout: 2000,
		margin: 30,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
	});


	/*------------------------------
	    FOOTER FLICKR FEED POPUP
	-------------------------------*/
	$('.project-big-thumb').magnificPopup({
		type: 'image',
		removalDelay: 500, //delay removal by X to allow out-animation
		callbacks: {
			beforeOpen: function () {
				// just a hack that adds mfp-anim class to markup 
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
		gallery: {
			enabled: true
		},
		closeOnContentClick: true,
		midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});


	/*--------------------------
	    ACTIVE WOW JS
	----------------------------*/
	new WOW().init();

}(jQuery));



jQuery(window).on('load', function () {
	"use strict";
	/*--------------------------
	    PRE LOADER
	----------------------------*/
	$(".preeloader").fadeOut(1000);

	/*---------------------------
        ISOTOPE ACTIVE ON LOAD
    -----------------------------*/
	$(".project-gallery").isotope({
		itemSelector: '.single-project'
	});
});
