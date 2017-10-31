'use strict';

$(document).ready(function() {

	/*запускаем wowjs*/
	new WOW().init();


	/*зскролл до нужного эллемента при переходе с другой страници*/
	$('html, body').stop().animate({
	    scrollTop: $('#home').offset().top
	}, 777);

	var anchorScroll = localStorage.getItem('anchor');
	console.log(anchorScroll);

	if(anchorScroll) {
		   var anchor = anchorScroll;
		   var scrollTo = function() {

		   		if($("div").is("#" + anchor)) {
			        $('html, body').stop().animate({
			            scrollTop: $("#" + anchor).offset().top
			        }, 777);
			        $('.header').addClass('hidden');
			        localStorage.removeItem("anchor");
			        anchorScroll = null;
		   		}
		   };

		   scrollTo();
	};

	var sctollToEllement = function(e) {

		var $this = $(this),
			thisData = $this.data('scroll');

			if(thisData) {
				localStorage.setItem("anchor", thisData);
			} else {
				localStorage.removeItem("anchor");
			}
	}

	$('.sctoll-to-ellement').on('click', sctollToEllement);



	//слайдер
	$(".slider-main__wrap").slick({
		dots: false,
		arrows: true
	});
	

	//слайдер главный
	$(".block-main__list").slick({
		dots: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
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



	$(".lk-slider-mobile").slick({
				slidesToShow: 3,
				slidesToScroll: 3,
				dots: true,
				arrows: true,
				autoplay: false,
				autoplaySpeed: 5000,
				responsive: [
					{
					breakpoint: 990,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2,
							arrows: false,
						}
					},
					{
					breakpoint: 650,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
							arrows: false,
						}
					}
					
				]
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
    });

    $('body').on('click', function() {
    	$('.header__dropdown').removeClass('active');
    }) 

	/*маски для инпутов*/ 
	$("#header__phone_number").mask("+7 (999) 999-99-99");
	$("#header__phone_number-mobile").mask("+7 (999) 999-99-99");
	$("#form-registracion__input-telefon").mask("+7 (999) 999-99-99");
	$("#lk__input_phone").mask("+7 (999) 999-99-99");



	/*воспроизведение видео*/

	var videoOpen = function(e){
		e.preventDefault();
		var thisEl = $(this),
			thisData = thisEl.data('video');
			console.log(thisData);
		$("#video-block").addClass('active');
		$("#video-block__video source").attr('src', 'video/' + thisData + '.mp4');
		$("#video-block__video").load();
		$("#video-block__video").get(0).play();

	};

	var closeOpen = function(e){
		e.preventDefault();
		$("#video-block").removeClass('active');
		$("#video-block__video").get(0).pause();		
	}


	$(".lk__list-link a").on("click touchstart", videoOpen);
	$("#video-block__wrap-close").on("click touchstart", closeOpen);



	/*страница демо личного кабинета. Дима, это наверное тебе решать когда выводить это окно.*/

	// $(".lk__list-elem-default").on("click", function() {
	// 	$(".popup").addClass('active');
	// });

	// $(".popup").on("click", function() {
	// 	$(".popup").removeClass('active');
	// });

	/*Дима, это наверное тебе решать когда выводить это окно.*/
	$(".form-registracion__btn").on("click", function() {
		$(".popup").addClass('active');
	});

	$(".popup").on("click", function() {
		$(".popup").removeClass('active');
	});

	/*Дима, это наверное тебе решать когда выводить это окно.*/
	$(".lk__list-elem-default").on("click", function() {
		$(".popup").addClass('active');
	});

	$(".popup").on("click", function() {
		$(".popup").removeClass('active');
	});

	// переключение качества видео
	$('.video-block__quality-link').on('click', function(e) {
		e.preventDefault();
		$('.video-block__quality-link').removeClass('active');
		$(this).addClass('active')
	});

});