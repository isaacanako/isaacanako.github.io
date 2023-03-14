(function ($) {
	'use strict';

	/**
	 * Easy selector helper function
	 */
	const select = (el, all = false) => {
		el = el.trim()
		if (all) {
		return [...document.querySelectorAll(el)]
		} else {
		return document.querySelector(el)
		}
	}

	/**
	 * Easy event listener function
	 */
	const on = (type, el, listener, all = false) => {
		let selectEl = select(el, all)
		if (selectEl) {
		if (all) {
			selectEl.forEach(e => e.addEventListener(type, listener))
		} else {
			selectEl.addEventListener(type, listener)
		}
		}
	}

	/**
	 * Easy on scroll event listener 
	 */
	const onscroll = (el, listener) => {
		el.addEventListener('scroll', listener)
	}

	var nav_offset_top = $('header').height() + 50;
	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed
	function navbarFixed() {
		if ($('.header_area').length) {
			$(window).scroll(function () {
				var scroll = $(window).scrollTop();
				if (scroll >= nav_offset_top) {
					$('.header_area').addClass('navbar_fixed');
				} else {
					$('.header_area').removeClass('navbar_fixed');
				}
			});
		}
	}
	navbarFixed();

	// $('select').niceSelect();
	/* ---------------------------------------------
            Isotope js Starts
         --------------------------------------------- */
	/*
	$(window).on('load', function () {
		$('.portfolio-filter ul li').on('click', function () {
			$('.portfolio-filter ul li').removeClass('active');
			$(this).addClass('active');

			var data = $(this).attr('data-filter');
			$workGrid.isotope({
				filter: data
			});
		});

		if (document.getElementById('projects')) {
			var $workGrid = $('.portfolio-grid').isotope({
				itemSelector: '.all',
				percentPosition: true,
				masonry: {
					columnWidth: '.grid-sizer'
				}
			});
		}
	});
	*/

	/*----------------------------------------------------*/
	/* Start Magnific Pop Up
	/*----------------------------------------------------*/
	if ($('.img-gal').length > 0) {
		$('.img-gal').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}
	/*----------------------------------------------------*/
	/*  End  Magnific Pop Up
	/*----------------------------------------------------*/

	/*----------------------------------------------------*/
    /* counter js
    /*----------------------------------------------------*/
    // if(document.getElementById("features_counter")){
    //     $('.counter').counterUp({
    //         delay: 10,
    //         time: 1000
    //     });
    // }

	/*----------------------------------------------------*/
	/*  Testimonials Slider
    /*----------------------------------------------------*/
	if ($('.testimonial-slider').length) {
		$('.testimonial-slider').owlCarousel({
			loop: false,
			margin: 30,
			items: 1,
			autoplay: false,
			smartSpeed: 2500,
			dots: true
		});
	}

	/*-------------------------------------------------------------------------------
    Brand Slider 
	-------------------------------------------------------------------------------*/
	if ($('.brand-carousel').length) {
		$(".brand-carousel").owlCarousel({
			items: 1,
			autoplay: false,
			loop: true,
			nav: false,
			margin: 30,
			dots: false,
			responsive: {
				0: {
					items: 1,
				},
				420: {
					items: 1,
				},
				480: {
					items: 3,
				},
				768: {
					items: 3,
				},
				992: {
					items: 5,
				}
			}
		});
	}

	

	/**
	 * Porfolio isotope and filter
	 */
	window.addEventListener('load', () => {
		let portfolioContainer = select('.portfolio-container');
		if (portfolioContainer) {
		let portfolioIsotope = new Isotope(portfolioContainer, {
			itemSelector: '.portfolio-item'
		});

		let portfolioFilters = select('#portfolio-flters li', true);

		on('click', '#portfolio-flters li', function(e) {
			e.preventDefault();
			portfolioFilters.forEach(function(el) {
			el.classList.remove('filter-active');
			});
			this.classList.add('filter-active');

			portfolioIsotope.arrange({
			filter: this.getAttribute('data-filter')
			});
			portfolioIsotope.on('arrangeComplete', function() {
			AOS.refresh()
			});
		}, true);
		}

	});

	/**
	 * Initiate portfolio lightbox 
	 */
	const portfolioLightbox = GLightbox({
		selector: '.portfolio-lightbox'
	});

	/**
	 * Initiate portfolio details lightbox 
	 */
	const portfolioDetailsLightbox = GLightbox({
		selector: '.portfolio-details-lightbox',
		width: '90%',
		height: '90vh'
	});

	/**
	 * Portfolio details slider
	 */
	new Swiper('.portfolio-details-slider', {
		speed: 400,
		loop: true,
		autoplay: {
		delay: 5000,
		disableOnInteraction: false
		},
		pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
		}
	});

	/**
	 * Animation on scroll
	 */
	window.addEventListener('load', () => {
	AOS.init({
		duration: 1000,
		easing: 'ease-in-out',
		once: true,
		mirror: false
	})
	});

})(jQuery);
