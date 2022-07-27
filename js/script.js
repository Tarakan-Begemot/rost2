var header = $('.header'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
	if ( scrolled > 24) {
		header.addClass('scrolled');
	}else{
		header.removeClass('scrolled');
	}
	if ( scrolled > 70) {
		header.addClass('scrolled2');
	}else{
		header.removeClass('scrolled2');
	}
	scrollPrev = scrolled;
});



var swiper0 = new Swiper(".projects__swiper", {
	slidesPerView: 3,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
	640: {
		slidesPerView: 1,
		spaceBetween: 0,
	},
	670:{
		slidesPerView: 2,
	},
	1230: {
		slidesPerView: 2,
		spaceBetween: 0,
	},
	1250: {
		slidesPerView: 3,
		spaceBetween: 0,
	},
	}
});



(function($) {
    $(document).on('click', '.groups a', function(e) {
	e.preventDefault();
	var $this = $(this),
		id = $this.data('id');
	$('.groups-data .active').removeClass('active');
	$('.groups .active').removeClass('active');
	$(this).addClass('active');
	$('#group-' + id).addClass('active');
    });
})(jQuery);

(function($) {
    $(document).on('click', '.groups2 a', function(e) {
	e.preventDefault();
	var $this = $(this),
		id = $this.data('id');
	$('.groups-data2 .active').removeClass('active');
	$('.groups2 .active').removeClass('active');
	$(this).addClass('active');
	$('#g2roup-' + id).addClass('active');
    });
})(jQuery);

(function($) {
    $(document).on('click', '.groups3 a', function(e) {
	e.preventDefault();
	var $this = $(this),
		id = $this.data('id');
	$('.groups-data3 .active').removeClass('active');
	$('.groups3 .active').removeClass('active');
	$(this).addClass('active');
	$('#g3roup-' + id).addClass('active');
    });
})(jQuery);


(function($) {
    $(document).on('click', '.groups4 a', function(e) {
	e.preventDefault();
	var $this = $(this),
		id = $this.data('id');
	$('.groups-data4 .active').removeClass('active');
	$('.groups4 .active').removeClass('active');
	$(this).addClass('active');
	$('#g4roup-' + id).addClass('active');
    });
})(jQuery);


(function($) {
    $(document).on('click', '.groups5 a', function(e) {
	e.preventDefault();
	var $this = $(this),
		id = $this.data('id');
	$('.groups-data5 .active').removeClass('active');
	$('.groups5 .active').removeClass('active');
	$(this).addClass('active');
	$('#g5roup-' + id).addClass('active');
    });
})(jQuery);


(function($) {
    $(document).on('click', '.groups7 a', function(e) {
	e.preventDefault();
	var $this = $(this),
		id = $this.data('id');
	$('.groups-data7 .active').removeClass('active');
	$('.groups7 .active').removeClass('active');
	$(this).addClass('active');
	$('#g7roup-' + id).addClass('active');
    });
})(jQuery);

(function($) {
    $(document).on('click', '.groups8 a', function(e) {
	e.preventDefault();
	var $this = $(this),
		id = $this.data('id');
	$('.groups-data8 .active').removeClass('active');
	$('.groups8 .active').removeClass('active');
	$(this).addClass('active');
	$('#g8roup-' + id).addClass('active');
    });
})(jQuery);

(function($) {
    $(document).on('click', '.groups9 a', function(e) {
	e.preventDefault();
	var $this = $(this),
		id = $this.data('id');
	$('.groups-data9 .active').removeClass('active');
	$('.groups9 .active').removeClass('active');
	$(this).addClass('active');
	$('#g9roup-' + id).addClass('active');
    });
})(jQuery);

(function($) {
    $(document).on('click', '.groups9 a', function(e) {
	e.preventDefault();
	var $this = $(this),
		id = $this.data('id');
	$('.groups-data9 .active').removeClass('active');
	$('.groups9 .active').removeClass('active');
	$(this).addClass('active');
	$('#g9roup-' + id).addClass('active');
    });
})(jQuery);

(function($) {
    $(document).on('click', '.groups10 a', function(e) {
	e.preventDefault();
	var $this = $(this),
		id = $this.data('id');
	$('.groups-data10 .active').removeClass('active');
	$('.groups10 .active').removeClass('active');
	$(this).addClass('active');
	$('#g10roup-' + id).addClass('active');
    });
})(jQuery);

(function($) {
    $(document).on('click', '.groups11 a', function(e) {
	e.preventDefault();
	var $this = $(this),
		id = $this.data('id');
	$('.groups-data11 .active').removeClass('active');
	$('.groups11 .active').removeClass('active');
	$(this).addClass('active');
	$('#g11roup-' + id).addClass('active');
    });
})(jQuery);



var swiper = new Swiper(".product__slider-min", {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	direction: "vertical",
	breakpoints: {
		420: {
			direction: "horizontal",
			slidesPerView: 3,
		},
		830: {
			direction: "horizontal",
			slidesPerView: 4,
		},
		1080: {
			direction: "vertical",
			slidesPerView: 4,
		}
	}
});
var swiper2 = new Swiper(".product__slider-max", {
	spaceBetween: 10,
	speed: 600,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: swiper,
	},
	pagination: {
		el: ".swiper-pagination",
	},
});



$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


$(document).ready(function() {
    $('.header__list').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


let inner = $('.projects-page__inner-hiden')

$('.projects-page__btn').on('click', function(){
	inner.addClass('active');
	$(this).addClass('active');
});





var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = 'img/logo2.png';

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    link.href = 'img/logo.png';
}

