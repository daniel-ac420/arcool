/* DESKTOP */
$(".slider_desktop .slider-for").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	infinite: true,
	speed: 250,
	fade: false,
	centerMode: false,
	asNavFor: ".slider_desktop .slider-nav"
});
	
$(".slider_desktop .slider-nav").slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	asNavFor: ".slider_desktop .slider-for",
	dots: false,
	infinite: true,
	centerMode: true,
	speed: 200,
	centerMode: true,
	focusOnSelect: true,
	vertical: true,
	responsive: [
		{
			breakpoint: 1180,
			settings: {
				vertical: false,
				slidesToShow: 3
			}
		}, 
//			{
//				breakpoint: 769,
//				settings: {
//					slidesToShow: 2
//				}
//			}, 
		{
			breakpoint: 540,
			settings: {
				vertical: false,
				slidesToShow: 2
			}
		}
	]
});