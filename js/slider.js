$(document).ready(function(){
    /*Company-------------------------------------------------------------------*/
	$('.slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:6,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow:2,
					autoplay:false
				}
			}
		]
	});

    /*Intro-------------------------------------------------------------------*/
    $('.slider__inner').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:800,
		autoplaySpeed:3000,
        infinite: true,
		responsive:[
			{
				breakpoint: 575,
				settings: {
					autoplay:false
				}
			}
		]		
	});
});