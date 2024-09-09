export const TypeWriterConfig = {
	strings: ['_Front End Developer', '_Mobile Developer', '_Problem Solver'],
	deleteSpeed: 30,
	autoStart: true,
	loop: true,
};

export const CarouselSettings = {
	infinite: true,
	centerMode: true,
	slidesToShow: 3,
	speed: 500,
	className: 'slider',
	adaptiveHeight: false,
	responsive: [
		{
			breakpoint: 1778,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			},
		},
		{
			breakpoint: 500,
			settings: {
				centerMode: false,
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 344,
			settings: {
				centerMode: false,
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};
