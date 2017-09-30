'use strict';

$(document).ready(function() {

	/*запускаем wowjs*/
	new WOW().init();

	//слайдер
	$(".slider-main__wrap").slick({
		dots: false,
		arrows: true
	});
	


	// //слайдер нижний
	// $(".slider-bottom__wrap").slick({
	// 	slidesToShow: 4,
	// 	slidesToScroll: 4,
	// 	dots: true,
	// 	arrows: true,
	// 	responsive: [
	// 		{
	// 		breakpoint: 1250,
	// 			settings: {
	// 				slidesToShow: 3,
	// 				slidesToScroll: 3
	// 			}
	// 		},
	// 		{
	// 		breakpoint: 1050,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 2
	// 			}
	// 		},
	// 		{
	// 		breakpoint: 767,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1
	// 			}
	// 		}
			
	// 	]
	// });


	//слайдер отзывво
	$(".slider-reviews").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
	});


	/*кнопка верхнего меню*/
	// $(window).resize(function(){
	// 	if($( window ).width() > 1024 ) {
	// 		$('.header').removeClass('open-menu');
	// 	}
	// });


	// $('.dropdown-menu__link').on('click', function(e) {
	// 	e.preventDefault();
	// 	if($( window ).width() <= 1024) {
	// 		$('.header').toggleClass('open-menu');
	// 	}
	// })

	/*верхнее меню прячется*/
    var indicator = new WheelIndicator({
        callback: function(e){
        	if(e.direction == 'down') {
        		$('.header').addClass('hidden');
        	} else if(e.direction == 'up') {
        		$('.header').removeClass('hidden');
        	}
            console.log(e.direction);
        },
        preventMouse: false
    });


    /*плавная прокрутка к блоку*/

      $(document).ready(function(){
	    $(".fixed-menu-anchor").on("click", function(e){
	        var anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $(anchor.attr('href')).offset().top
	        }, 777);
	        console.log(anchor.attr('href'));
	        
	        if(anchor.attr('href') == "#home") {
	        	$('.header').removeClass('hidden');
	        } else {
	        	$('.header').addClass('hidden');
	        }
	        e.preventDefault();
	        return false;
	    });
	});

    /*выпадающий дропдаун в верхнем меню*/

    $('.header__elem').on('click' , function(e) {
    	var that = $(this);
		$('.header__dropdown').removeClass('active');
    	that.find('.header__dropdown').addClass('active');
    	e.stopPropagation();
    })

    $('body').on('click', function() {
    	$('.header__dropdown').removeClass('active');
    }) 
});