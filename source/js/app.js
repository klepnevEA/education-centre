'use strict';

$(document).ready(function() {

	/*запускаем wowjs*/
	new WOW().init();

	//слайдер
	$(".slider-main__wrap").slick({
		dots: false,
		arrows: true
	});
	

	//слайдер
	$(".slider-our-teachers").slick({
		dots: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		adaptiveHeight: true,
		responsive: [
			{
			breakpoint: 1201,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
			breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			
		]
	});


	//слайдер отзывов
	$(".slider-reviews").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
	});


	/*кнопка верхнего меню*/
	$(window).resize(function(){
		if($( window ).width() > 990 ) {
			$('.header-mobile').removeClass('open-menu');
		}
	});


	$('.header-mobile__btn').on('click', function(e) {
		e.preventDefault();
		if($( window ).width() <= 990) {
			$('.header-mobile').toggleClass('open-menu');
		}
	})

	/*верхнее меню прячется*/
    var indicator = new WheelIndicator({
        callback: function(e){
        	if(e.direction == 'down') {
        		$('.header').addClass('hidden');
        	} else if(e.direction == 'up') {
        		$('.header').removeClass('hidden');
        	}
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

	/*маски для инпутов*/ 
	$("#header__phone_number").mask("+7 (999) 999-99-99");
	$("#header__phone_number-mobile").mask("+7 (999) 999-99-99");
});