$(window).on('scroll', function () {
	if ($(window).scrollTop()) {
		$('.navbar').addClass('blackto');
	} else {
		$('.navbar').removeClass('blackto');
	}
});


$(document).ready(function () {
	$('.navbar-nav>li>a').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});
});

$(document).ready(function () {
	$('#cards').owlCarousel({
		loop: false,
		margin: 20,
		nav: true,
		// rewind: true,
		dots: false,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		autoWidth: true,
		// autoplay: false,
		// autoplaySpeed: 100,
		// autoPlay: 20000,
		// center:true,
		responsive: {

			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	});
});

$(document).ready((function () {
	$('#sidenav-btn').click(function (e) {
		e.stopPropagation();
		$('.sidenav').toggleClass('active-btn');
		$('.main-body').toggleClass('active-body');
	});

	$('body,html').click(function (e) {
		$('.sidenav').removeClass('active-btn');
		$('.main-body').removeClass('active-body');
		// $('#list1').removeClass('visible');
	});

	$('.dropdown-menu').click(function (e) {
		e.stopPropagation();
	});


}));

var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function (evt) {
	if (checkList.classList.contains('visible')) {
		checkList.classList.remove('visible');
	}
	else {
		checkList.classList.add('visible');
	}
}

// var container = $('.table-height1'),
//     scrollTo = $('#center-tr');
