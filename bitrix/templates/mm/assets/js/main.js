(function($){
	'use strict';

/* --------------------------------------------------
	Initialization
-------------------------------------------------- */
     
    
    // Initialize all functions when the document is ready.
	$(document).ready(function(){

		initNavbar();
		initScroller();
		initCountCirc();
		initCountCircMin();
		initCountNbr();
		initCountMin();
		initSliders();
		initGallery();
		initAnimation();
		initVideoBg();
		initKenburns();
		initCountdown();
		if ( document.getElementById('shop-slider-range') ) {
			initRangeSlider();
		}

		// Parallax disabled for mobile screens
		if ($(window).width() >= 1260) {
			initParallax();

			$(window).stellar({
				hideDistantElements: false
			});
		}

	});

	// Initialize functions after elements are loaded.
	$(window).load(function() {

		// Preloader
		$('.preloader img').fadeOut(); // will first fade out the loading animation
		$('.preloader').delay(350).fadeOut('slow', function() {

		});


		initBlogMasonry();
        initPortfolio();

	});


/* --------------------------------------------------
	Navigation | Navbar
-------------------------------------------------- */
	
	function initNavbar(){
		// Sticky Nav & Transparent Background
		$(window).scroll(function(){

			if ($(window).scrollTop() > 20) {
				$('#top-menu').removeClass('navbar-trans', 300);
				$('#top-menu').removeClass('navbar-trans-dark');
				$('#top-menu').addClass('navbar-small', 300);
			}
			else {
				$('#top-menu:not(.mobile-nav)').addClass('navbar-trans', 300);
				$('#top-menu').removeClass('navbar-small', 300);

				if ($('#top-menu').hasClass('trans-helper')) {
					$('#top-menu:not(.mobile-nav)').addClass('navbar-trans-dark');
				}
			}

			$('#top-menu:not(.navbar-fixed-top)').removeClass('navbar-trans navbar-small navbar-trans-dark');

		});


		// Nav on mobile screens
		$(window).resize(function() {
	        if ($(window).width() <= 1259) {
				$('#top-menu').addClass('mobile-nav');
		    } else {
		    	$('#top-menu').removeClass('mobile-nav');
		    }

    		if ($('#top-menu').hasClass('mobile-nav')) {
    			$('#top-menu').removeClass('navbar-trans');
    			$('#top-menu').removeClass('navbar-trans-dark');
    		} else {
    			if ($(window).width() >= 1259 && $(window).top) {
    				$('#top-menu').addClass('navbar-trans');
    			}
    		}

    		// Remove dropdown open on hover for small screens
    		if ($('#top-menu').hasClass('mobile-nav')) {

    			$('.dropdown-toggle').on('mouseover', function(e){    
    			        e.preventDefault();

    			        $('.dropdown').removeClass('open');

    			    e.stopPropagation();
    			});
    		}

    		// Close mobile menu when clicked link
    		// var isNotDropdown = $('nav:not(.mobile-nav)');

    		if (!$('.nav a').hasClass('dropdown-toggle')) {

    			$('.nav a').on('click', function(){ 
			        if($('.navbar-toggle').css('display') !='none'){
			            $(".navbar-toggle").trigger( "click" );
			        }
			    });

    		}

	    }).resize();

		// Bugfix for iOS not scrolling on open menu
	    $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });


	} // initNavbar



/* --------------------------------------------------
	Scroll Nav
-------------------------------------------------- */

	function initScroller () {

		$('#navbar').localScroll({
			easing: 'easeInOutExpo'
		});

		$('#page-top').localScroll({
			easing: 'easeInOutExpo'
		});	
	} // initScroller




/* --------------------------------------------------
	Parallax
-------------------------------------------------- */

	
	function initParallax () {

		var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

		if (!isSafari) {
			$(".main-op").parallax("50%", 0.2);
			$(".number-counters").parallax("50%", 0.2);
			$(".cirlce-counters").parallax("50%", 0.3);
			$(".client-list-parallax").parallax("50%", 0.4);
			$(".ft-slider-parallax").parallax("50%", 0.4);
			$(".testimonials-parallaxx").parallax("50%", 0.4);
			$(".twitter-slider").parallax("50%", 0.4);
			$(".login-2").parallax("50%", 0.2);
		}		
	}



/* --------------------------------------------------
	Counters Circles
-------------------------------------------------- */

	function initCountCirc() {
		
		var hasCircles = $('#skillsCircles').hasClass('circles-counters');

		if (hasCircles) {

			var waypoint = new Waypoint({
			  element: document.getElementById('skillsCircles'),
			  handler: function() {

			    	var options = {
					  useEasing : true,
					  separator : ''
					};
					
					$('.chart').easyPieChart({
						size: '150',
						lineWidth: 2,
						lineCap: 'square',
						trackColor: '',
					    barColor: '#f8f8f8',
					    scaleColor: false,
					    easing: 'easeOutBack',
					    animate: {
					    	duration: 1600,
					    	enabled: true 
					    }
					});
					// init only once
					this.destroy();
				},
				offset: '80%',
			});

		}

	} // initCountCirc



	function initCountCircMin() {
		
		var hasCircles = $('#skillsCirclesMin').hasClass('circles-counters-dark-bg');

		if (hasCircles) {

			var waypoint = new Waypoint({
			  element: document.getElementById('skillsCirclesMin'),
			  handler: function() {

			    	var options = {
					  useEasing : true,
					  separator : ''
					};
					
					$('.chart').easyPieChart({
						size: '150',
						lineWidth: 2,
						lineCap: 'square',
						trackColor: '',
					    barColor: '#f8f8f8',
					    scaleColor: false,
					    easing: 'easeOutBack',
					    animate: {
					    	duration: 1600,
					    	enabled: true 
					    }
					});
					// init only once
					this.destroy();
				},
				offset: '80%',
			});

		}

	} // initCountCirc




/* --------------------------------------------------
	Number Counters
-------------------------------------------------- */

	function initCountNbr () {

		/*var hasCounters = $('#counters').hasClass('count-wrapper');

		if (hasCounters) {

			var waypoint = new Waypoint({
			  element: document.getElementById('counters'),
			  handler: function() {

			    	var options = {
						useEasing : true,
						useGrouping : true, 
						separator : ','
					};
					// Counter 1
					var counter1 = new CountUp('count-1', 0, 467, 0, 3, options);
					counter1.start();
					// Counter 2
					var counter2 = new CountUp('count-2', 0, 2835, 0, 3, options);
					counter2.start();
					// Counter 3
					var counter3 = new CountUp('count-3', 0, 46930, 0, 3, options);
					counter3.start();
					// Counter 4
					var counter4 = new CountUp('count-4', 0, 102890, 0, 3, options);
					counter4.start();
					// init only once
					this.destroy();
				},
				offset: '80%',
			});

		}*/
		

	} // initCountNbr



	function initCountMin () {

		var hasCounters = $('#counters-min').hasClass('nbr-wrapper');

		if (hasCounters) {

			var waypoint = new Waypoint({
			  element: document.getElementById('counters-min'),
			  handler: function() {

			    	var options = {
					  useEasing : true,
					  separator : ''
					};
					// Counter 1
					var counter1 = new CountUp('count-min-1', 0, 675, 0, 3, options);
					counter1.start();
					// Counter 2
					var counter2 = new CountUp('count-min-2', 0, 1457, 0, 3, options);
					counter2.start();
					// Counter 3
					var counter3 = new CountUp('count-min-3', 0, 471, 0, 3, options);
					counter3.start();
					// Counter 4
					var counter4 = new CountUp('count-min-4', 0, 753, 0, 3, options);
					counter4.start();
					// init only once
					this.destroy();
				},
				offset: '80%',
			});

		}
		

	} // initCountMin



/* --------------------------------------------------
	Sliders
-------------------------------------------------- */
	
	function initSliders() {

		// Features Slider
		$('.ft-slider').slick({
			autoplay: true,
			autoplaySpeed: 4000,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="info-slider-nav slick-prev"><i class="fa fa-long-arrow-left"></i></button>',
			nextArrow: '<button type="button" class="info-slider-nav slick-next"><i class="fa fa-long-arrow-right"></i></button>',
			responsive: [
			    {
			      breakpoint: 999,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
			        infinite: true,
			      }
			    },
			    {
			      breakpoint: 770,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ]
		});

		// Testimonials Sliders
		$('.t-slider').slick({
			autoplay: false,
			autoplaySpeed: 4000,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="t-slider-nav slick-prev"><span class="linea-arrows-slim-left"></span></button>',
			nextArrow: '<button type="button" class="t-slider-nav slick-next"><span class="linea-arrows-slim-right"></span></button>',
		});

		// Brands/Clients Slider
		$('.clients-slider').slick({
			autoplay: true,
			autoplaySpeed: 4000,
			slidesToShow: 5,
			slidesToScroll: 1,
			dots: false,
			arrows: false,
			responsive: [
			    {
			      breakpoint: 999,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 2,
			        infinite: true,
			      }
			    },
			    {
			      breakpoint: 770,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 599,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    }
			]
		});

		// Portfolio Single Slider
		$('.single-img-slider').slick({
			autoplay: true,
			autoplaySpeed: 4000,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="slider-nav sl-prev"><span class="linea-arrows-slim-left"></span></button>',
			nextArrow: '<button type="button" class="slider-nav sl-next"><span class="linea-arrows-slim-right"></span></button>',
		});

		// Centered Gallery
		$('.centered-gallery').slick({
			centerMode: true,
			  centerPadding: '60px',
			  slidesToShow: 3,
			  responsive: [
			    {
			      breakpoint: 768,
			      settings: {
			        arrows: false,
			        centerMode: true,
			        centerPadding: '40px',
			        slidesToShow: 3
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        arrows: false,
			        centerMode: true,
			        centerPadding: '40px',
			        slidesToShow: 1
			      }
			    }
			  ]
		});

		// Full Screen Hero Slider
		$('.fs-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			useCSS: true,
			fade: true,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><span class="linea-arrows-slim-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="linea-arrows-slim-right"></span></button>',
			autoplay: true,
			autoplaySpeed: 4000,
		});

		// Full Width Hero Slider
		$('.fw-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><span class="linea-arrows-slim-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="linea-arrows-slim-right"></span></button>',
			autoplay: true,
			autoplaySpeed: 4000,
		});

		// Text Slider
		$('.text-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			speed: 300,
			fade: true,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="slick-prev"><span class="linea-arrows-slim-left"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="linea-arrows-slim-right"></span></button>',
			autoplay: true,
			autoplaySpeed: 4000,
		});

		// Shop Product Slider
		$('.shop-p-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			speed: 300,
			// fade: false,
			dots: false,
			arrows: true,
			prevArrow: '<button type="button" class="shop-p-slider-nav shop-p-slider-nav-left"><span class="linea-arrows-slim-left"></span></button>',
			nextArrow: '<button type="button" class="shop-p-slider-nav shop-p-slider-nav-right"><span class="linea-arrows-slim-right"></span></button>',
			autoplay: false,
		});

		// Shop Product Single - Slider
		$('.prod_single_img_slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
			speed: 300,
			// fade: false,
			infinite: true,
			dots: true,
			arrows: true,
			prevArrow: '<button type="button" class="shop-p-slider-nav shop-p-slider-nav-left"><span class="linea-arrows-slim-left"></span></button>',
			nextArrow: '<button type="button" class="shop-p-slider-nav shop-p-slider-nav-right"><span class="linea-arrows-slim-right"></span></button>',
			autoplay: false,
			accessibility: false,
			customPaging: function (slider, i) {
	            return '<a href="#">' + $('.prod_single_thumbs_slider li:nth-child(' + (i + 1) + ')').html() + '</a>';
	        }
		});

	} // initSliders



/* --------------------------------------------------
	Portfolio
-------------------------------------------------- */
	
	function initPortfolio () {

		// Filters
		$('.portfolio-filters a').click(function (e) {
			  e.preventDefault();

			  $('li').removeClass('active');
			  $(this).parent().addClass('active');
		});

		
		// Full Width Gallery (3 columns)
		function pfolio3colFW () {
			
			var $container = $('#pfolio');
			// init
			$container.isotope({
				// options
				itemSelector: '.portfolio-item',
			});

			// Filter items
			$('#pfolio-filters').on( 'click', 'a', function() {
				var filterValue = $(this).attr('data-filter');
				$container.isotope({ filter: filterValue });
			});

		} // fwNogap3col


		function pfolioMasonry () {
			
			var $container = $('.pfolio-items');
			// init
			$container.isotope({
				// options
				itemSelector: '.p-item',
			    percentPosition: true,
			    layoutMode: 'packery',
			    masonry: {
			      columnWidth: '.grid-sizer'
			    }				
			});

			// Filter items
			$('#pfolio-filters').on( 'click', 'a', function() {
				var filterValue = $(this).attr('data-filter');
				$container.isotope({ filter: filterValue });
			});

		}


		pfolio3colFW();
		pfolioMasonry();

		// bug fix window screen width 1960'
        $('#pfolio-filters .active a').click();

	} // initPortfolio



/* --------------------------------------------------
	Light Gallery
-------------------------------------------------- */

	function initGallery () {

		// Image Lightbox
		var hasPopup = $('a').hasClass('open-gallery');

		if (hasPopup) {

			$('.open-gallery').magnificPopup({
				type:'image',
				gallery: {
				    enabled: true
				  }
			});
			
		}


		// Footer Gallery Lightbox
		var hasFtPopup = $('a').hasClass('gallery-widget-lightbox');

		if (hasFtPopup) {

			$('.gallery-widget-lightbox').magnificPopup({
				type:'image',
				gallery: {
				    enabled: true
				  }
			});

		}

		// Video Lightbox
		var hasVideoPopup = $('a').hasClass('popup-video');

		if (hasVideoPopup) {

			$('.popup-video').magnificPopup({
	          	disableOn: 700, 
	         	type: 'iframe',
	          	mainClass: 'mfp-fade',
	          	removalDelay: 160,
	          	preloader: false,

	          	fixedContentPos: false
			});

		}

	} // initGallery




/* --------------------------------------------------
	Blog Masonry Layout
-------------------------------------------------- */

	function initBlogMasonry () {

		var $container = $('.blog-container');
			// init
			$container.isotope({
				// options
				itemSelector: '.blog-selector',
				percentPosition: true
			});
	}
	



/* --------------------------------------------------
  Contact Pages
-------------------------------------------------- */

	$('.show-map').on('click', function(e){
	  e.preventDefault();
	  $('.contact-info-wrapper').toggleClass('map-open');
	  $('.show-info-link').toggleClass('info-open');
	});

	$('.show-info-link').on('click', function(e){
	  e.preventDefault();
	  $('.contact-info-wrapper').toggleClass('map-open');
	  $(this).toggleClass('info-open');
	});



/* --------------------------------------------------
	Animation
-------------------------------------------------- */

	function initAnimation () {
		
		new WOW().init();

	}




/* --------------------------------------------------
	Video Background
-------------------------------------------------- */

	function initVideoBg () {

		var hasBgVideo = $('#fs-video-one-bg').hasClass('player');
		var hasFwBgVideo = $('#fw-video-one-bg').hasClass('player');
		var hasSecBgVideo = $('#section-video').hasClass('player');

		if (hasBgVideo || hasFwBgVideo || hasSecBgVideo) {

			$('.player').YTPlayer();

		}
		

	}



/* --------------------------------------------------
	Ken Burns Slider
-------------------------------------------------- */
	function initKenburns () {
		
		var hasKenburns = $('.kenburn-hero')[0];

		if (hasKenburns) {
			var w_height = $(window).height();
			var w_width = $(window).width();

			$('.kenburns').attr('width', w_width);
			$('.kenburns').attr('height', w_height);
			$('.kenburns').kenburns({
				images: ['http://placehold.it/2440x1578',
						'http://placehold.it/2440x1578/999/eee',
						'http://placehold.it/2440x1578/ccc/111'
						],
				frames_per_second: 30,
				display_time: 5000,
				fade_time: 1000,
				zoom: 1.1,
				background_color:'#000000'
			});
		}

	} // initKenburns



/* --------------------------------------------------
	Coming Soon - Countdown
-------------------------------------------------- */

	function initCountdown () {

		var hasCountdown = $('#cs-timer').hasClass('cs-timer');

		if (hasCountdown) {

			// Add end date here (current: 2017/01/01) from witch the timer will countdown.
			$('#cs-timer').countdown('2017/01/01', function(event) {
			    $(this).html(event.strftime('<div class="item"><span class="nbr-timer">%D</span><span class="title-timer">Days<span></div><div class="item"><span class="nbr-timer">%H</span><span class="title-timer">Hours<span></div><div class="item"><span class="nbr-timer">%M</span><span class="title-timer">Minutes<span></div><div class="item"><span class="nbr-timer">%S</span><span class="title-timer">Seconds<span></div>'));
			  });

		}

	}



/* --------------------------------------------------
	Shop Price Filter - (range slider)
-------------------------------------------------- */
	function initRangeSlider () {

		$( "#shop-slider-range" ).slider({
			range: true,
			min: 100,
			max: 750,
			values: [ 121, 721 ], // starting values
			slide: function( event, ui ) {
				$( "#shop-slider-range-amount" ).val( "$" + ui.values[ 0 ] + " TO $" + ui.values[ 1 ] );
			}
		});
		$( "#shop-slider-range-amount" ).val( "$" + $( "#shop-slider-range" ).slider( "values", 0 ) +
			" TO $" + $( "#shop-slider-range" ).slider( "values", 1 ) );

	} // initRangeSlider



})(jQuery);



/* --------------------------------------------------
	Contact Form JS Validation & AJAX call 
-------------------------------------------------- */
$(function() {
	function clearForm(){
		if(this.tagName !== 'FORM')
           $(this).find('form')[0].reset();
		else this.reset();
		
        $(this).find('.alert-error,.ajax-message, .icon_file .url_file').html('');
        $(this).find('.input-error').removeClass('input-error');
        $(this).find('.input-error-2').removeClass('input-error-2');
    }
	
    $('#modal').on('beforeClose', clearForm);
    
    
	$("#navbar a.modal").on("click", function(event){
		event.preventDefault();
		$('#modal').arcticmodal();
	});

	$("a.projects-mail-form").on("click", function(event){
		event.preventDefault();
		$('#modal-project').arcticmodal();
	});
	$("#modal-project a.icon_file").on("click", function(event){
		event.preventDefault();
		$('#modal-project input[type="file"]').click();
	});
    $('#modal-project input[type="file"]').on("change", function(event){
        event.preventDefault();
        $("#modal-project .url_file").html($(this).val());
    });
	$(".cta-link .cta-wrapper a.btn").on("click", function(event){
		if($(this).data('nomodal')!='Y'){
			event.preventDefault();
			$('#modal').arcticmodal();
		}
	});
	
	$('input[name="phone"]').mask("+7 (999) 999-99-99");
	
	//	Regular Expressions
	var expEmail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
	var	expLettersOnly = /^[А-яа-я ]+$/;

	//	Checks if a field has the correct length
	function validateLength ( fieldValue, minLength ) {
		return ( $.trim( fieldValue ).length > minLength );
	}

	// comments replay
	$( '.bp-comment' ).on( 'click', '.comment-replay-btn', function() {
		$('body').animate({ scrollTop: $('.comment-form').offset().top }, 500);
		$('.comments-ajax textarea').val($(this).closest(".comment-info").find(".comment-name").text()+", ");
	});
	
	$( '.comments-ajax' ).submit(function(e) {
		e.preventDefault();
		var $this = $( this ),
				action = $this.attr( 'action' );

		ymaps.ready(function() {
			var city = ymaps.geolocation.city;

			// The AJAX requrest
			$.post(
					action,
					$this.serialize() + "&city=" + city,
					function( data ) {
						//console.log(data);
						if(data.error == 0){
							$( '.ajax-message' ).html( data.message );
							$(".comments-ajax input").each(function(){
								if($(this).attr("type")!="submit")
								$(this).val("");
							});
							$(".comments-ajax textarea").val("");
						}else{
							$( '.ajax-message' ).html( data.message );
						}
					}
			);
		});
	});

	//	AJAX call
	$( '.form-ajax' ).submit(function(e) {
		e.preventDefault();
		var $this = $( this ), action = $this.attr( 'action' );

		// add city input
		ymaps.ready(function() {
			var city = ymaps.geolocation.city;
			if($this.find('input[name="city"]').length==0){
                $this.append('<input type="hidden" name="city" value="'+city+'">');
            }else{
                $this.find('input[name="city"]').val(city);
			}
        });
		// The AJAX requrest
            $.ajax({
                url: action,
                type: 'POST',
                data: new FormData($this[0]),
                async: false,
                success: function (data) {
                    if(data.status === 'success'){
                        clearForm.call($this[0]);
                        var success_msg = '<div class="alert alert-success alert-dismissible" role="alert">\n' +
                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>\n' +
                            '<strong>Успешно!</strong> '+data.message+' \n' +
                            '</div>';
                        $this.find( '.ajax-message' ).html(success_msg);
                    }else{
                        for(var item in data.data){
                            var error_msg = '<div class="alert alert-danger alert-dismissible" role="alert">\n' +
                                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>\n' +
                                '<strong>Внимание!</strong> '+data.data[item]+' \n' +
                                '</div>';
                            $this.find( '.ajax-message' ).append(error_msg);
                        }
                    }
                },
                cache: false,
                contentType: false,
                processData: false
            });
	});
	//
    $('#editFormMainAgree').on("click", function(event){
    	var submit = $(this).parents('form').find('input[type="submit"]');
        if(submit.attr('disabled')=== undefined){
            submit.attr('disabled', true);
        }else{
            submit.removeAttr('disabled');
		}
    });

    //	FORM FILE
	$(".btn.modal-file").on("click", function(event){
		$('#form-file').arcticmodal();
		$('#form-file input[name="message"]').val($(this).attr("title"));
	});

	$( '.form-file' ).submit(function(e) {
		$.ajax({
				url: $(this).attr('action'),
				type: 'POST',
				data: new FormData($(this)[0]),
				async: false,
				success: function (data) {
					if(data.error == 0){
						$( '.ajax-message' ).html( data.message );
						$(".form-file input").each(function(){
							if($(this).attr("type")!="submit")
							$(this).val("");
						});
					}else{
						$( '.ajax-message' ).html( data.message );
					}
				},
				cache: true,
				contentType: false,
				processData: false
			});
			return false;
	});




	//	Validates the fileds
	$( '.form-file,.form-ajax,.comments-ajax' ).on( 'input', 'input.validate-locally', function() {
		validateField( $(this) );
	});

	function validateField ( field ) {
		var errorText = "",
				error = false,
				value = field.val(),
				siblings = field.siblings( ".alert-error" );

		// Test the name field
		if ( field.attr("name") === "name" ) {
			if ( !/^[А-Яа-я ]+$/.test(value) ) {
						error = true;
						errorText += '<i class="fa fa-info-circle"></i> Вы должны указать хотя-бы Имя и Отчество!<br>';
						$('input[name="name"]').addClass('input-error');
			} else {
				$('input[name="name"]').removeClass('input-error');
			}

			if ( !expLettersOnly.test( value ) ) {
						error = true;
						errorText += '<i class="fa fa-info-circle"></i> Допустимо использовать только буквы русского языка и пробелы!<br>';
						$('input[name="name"]').addClass('input-error-2');
			} else {
				$('input[name="name"]').removeClass('input-error-2');
			}
		}

		// Test the email field
		if ( field.attr("name") === "email" ) {
			if ( !expEmail.test( value ) ) {
						error = true;
						errorText += '<i class="fa fa-info-circle"></i> Введите правильный адрес электронной почты!<br>';
						$('input[name="email"]').addClass('input-error');
			} else {
				$('input[name="email"]').removeClass('input-error');
			}
		}

		// Display the errors
		siblings.html( errorText );
	}


	//File input handler
	$('input[type="file"]').click(function(e){
		e.stopPropagation();
	}).change(function(e){
		$(this).siblings('.form-control').text($(this).val());
	}).siblings('.form-control').click(function(e){
		$(this).prev('input[type="file"]').trigger('click');
	});

});