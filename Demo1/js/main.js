;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#colorlib-offcanvas, .js-colorlib-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="colorlib-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle colorlib-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#colorlib-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#colorlib-offcanvas').append(clone2);

		$('#colorlib-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#colorlib-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-colorlib-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".colorlib-loader").fadeOut("slow");
	};

	// var counter = function() {
	// 	$('.js-counter').countTo({
	// 		 formatter: function (value, options) {
	//       return value.toFixed(options.decimals);
	//     },
	// 	});
	// };

	// var counterWayPoint = function() {
	// 	if ($('#colorlib-counter').length > 0 ) {
	// 		$('#colorlib-counter').waypoint( function( direction ) {
										
	// 			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
	// 				setTimeout( counter , 400);					
	// 				$(this.element).addClass('animated');
	// 			}
	// 		} , { offset: '90%' } );
	// 	}
	// };

	// var sliderMain = function() {
		
	//   	$('#colorlib-hero .flexslider').flexslider({
	// 		animation: "fade",
	// 		slideshowSpeed: 5000,
	// 		directionNav: true,
	// 		start: function(){
	// 			setTimeout(function(){
	// 				$('.slider-text').removeClass('animated fadeInUp');
	// 				$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
	// 			}, 500);
	// 		},
	// 		before: function(){
	// 			setTimeout(function(){
	// 				$('.slider-text').removeClass('animated fadeInUp');
	// 				$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
	// 			}, 500);
	// 		}

	//   	});

	//   	$('#colorlib-hero .flexslider .slides > li').css('height', $(window).height());	
	//   	$(window).resize(function(){
	//   		$('#colorlib-hero .flexslider .slides > li').css('height', $(window).height());	
	//   	});

	// };

	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true

			});
		}
	};

	// Owl Carousel
	// var owlCrouselFeatureSlide = function() {
	// 	var owl = $('.owl-carousel');
	// 	owl.owlCarousel({
	// 		autoplay: true,
	// 		loop: true,
	// 		margin: 30,
	// 		responsiveClass: true,
	// 		nav: true,
	// 		dots: false,
	// 		smartSpeed: 500,
	// 		responsive:{
	// 			0:{
	// 			items:1
	// 			},
	// 			600:{
	// 			   items:2
	// 			},
	// 			1000:{
	// 			   items:2
	// 			}
	// 	    },
	// 		navText: [
	// 			"<i class='icon-arrow-left3 owl-direction'></i>",
	// 			"<i class='icon-arrow-right3 owl-direction'></i>"
	//      	]
	// 	});

	// 	// $('.owl-carousel2').owlCarousel({
	// 	// 	 animateOut: 'slideOutDown',
	// 	//     animateIn: 'flipInX',
	// 	// 	 autoplay: true,
	// 	//     loop:true,
	// 	//     margin:30,
	// 	//     nav:true,
	// 	//     dots: true,
	// 	//     autoplayHoverPause: true,
	// 	//     responsive:{
	// 	//         0:{
	// 	//             items:1
	// 	//         },
	// 	//     },
	// 	//     navText: [
	// 	//       "<i class='icon-arrow-left3 owl-direction'></i>",
	// 	//       "<i class='icon-arrow-right3 owl-direction'></i>"
	// 	//     	]
	// 	// })
	// };


	var stickyFunction = function() {

		var h = $('.image-content').outerHeight();

		if ($(window).width() <= 992 ) {
			$("#sticky_item").trigger("sticky_kit:detach");
		} else {
			$('.sticky-parent').removeClass('stick-detach');
			$("#sticky_item").trigger("sticky_kit:detach");
			$("#sticky_item").trigger("sticky_kit:unstick");
		}

		$(window).resize(function(){
			var h = $('.image-content').outerHeight();
			$('.sticky-parent').css('height', h);


			if ($(window).width() <= 992 ) {
				$("#sticky_item").trigger("sticky_kit:detach");
			} else {
				$('.sticky-parent').removeClass('stick-detach');
				$("#sticky_item").trigger("sticky_kit:detach");
				$("#sticky_item").trigger("sticky_kit:unstick");

				$("#sticky_item").stick_in_parent();
			}
			

			

		});

		$('.sticky-parent').css('height', h);

		$("#sticky_item").stick_in_parent();

	};

	// Document on load.

	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		goToTop();
		loaderPage();
		parallax();
		stickyFunction();
	});


}());

$(document).ready(function(){
	// Banner Slick slider
    $(".banner-slider").slick({
      dots: false,
      infinite: true,
      autoplay:true,
      fade: true,
      adaptiveHeight: true,
      nextArrow: '<i class="slick-next wow shake"></i>',
      prevArrow: '<i class="slick-prev wow shake"></i>',
    });
  // End banner slick-slider

  /*Work slider start*/
    $(".work-slider").slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      nextArrow: '<i class="slick-next wow shake"></i>',
      prevArrow: '<i class="slick-prev wow shake"></i>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  /*Work slider end*/
});