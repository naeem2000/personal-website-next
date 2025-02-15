import { ImFacebook, ImInstagram, ImLinkedin, ImGithub } from 'react-icons/im';
import { NavLinks, PageData } from '../TS/types';
import { ROUTE_ABOUT, ROUTE_HOME, ROUTE_PORTFOLIO } from '@/app/Routes';

export const navlinks: NavLinks = {
	links: [
		{
			id: 0,
			label: '_hero',
			link: ROUTE_HOME,
		},
		{
			id: 1,
			label: '_about',
			link: ROUTE_ABOUT,
		},
		{
			id: 2,
			label: '_portfolio',
			link: ROUTE_PORTFOLIO,
		},
		{
			id: 3,
			label: '_services',
			link: '#services',
		},
		{
			id: 4,
			label: '_contact',
			link: '#contact',
		},
	],
};

export const aboutText = [
	{
		symb: '{/}',
		heading: '_team work',
		text: '...I thrive in collaborative environments, where teamwork drives innovation and success. My approach is centered on fostering open communication, mutual respect, and shared accountability, ensuring that every team member feels valued and empowered. ',
	},
	{
		symb: '{!}',
		heading: '_innovation',
		text: '...I am deeply committed to driving innovation by embracing creativity, challenging the status quo, and exploring new possibilities. My work focuses on identifying unique solutions to complex problems and leveraging cutting-edge technologies.',
	},
	{
		symb: '{#}',
		heading: '_excellence',
		text: '...I am dedicated to pursuing excellence in every aspect of my work, striving to exceed expectations and deliver outstanding results. With a focus on precision, quality, and continuous improvement, I aim to raise standards and inspire those around me to do the same.',
	},
	{
		symb: '{%}',
		heading: '_hard work',
		text: '...I firmly believe in the value of hard work as the foundation for achieving meaningful success. With a commitment to perseverance, dedication, and resilience, I tackle challenges head-on and strive to deliver exceptional results. ',
	},
];

export const pageData: PageData = {
	mobile: [
		{
			id: 0,
			image: '/projects/cmrmrn.jpg',
			alt: 'mosque mobile',
			title: '{Claremont Mosque Mobile App}',
			description:
				'React-Native mobile app representing Claremont Main Road Mosque with contentful headless API to manage the content;',
			link: 'https://github.com/naeem2000/Claremont-Mosque-React-Native',
		},
		{
			id: 1,
			image: '/projects/memory-game.png',
			alt: 'cerebral twist mobile app',
			title: '{Cerebral Twist Mobile App}',
			description:
				'Memory game in React-Native, using firebase to track scores located in the scoreboard screen, using email, username & password;',
			link: 'https://github.com/naeem2000/Cerebral-Twist',
		},
	],
	web: [
		{
			id: 0,
			image: '/projects/forecast-hub.png',
			alt: 'forecast hub',
			title: '{Forecast Hub}',
			description: `Weather App in React.Js & OpenWeatherMap API for searching countries and displaying current weather & 5 day forecast. Designed by Zaakirah Abrams;`,
			link: 'https://forecast-hub.vercel.app/',
		},
		{
			id: 1,
			image: '/projects/job-listing.png',
			alt: 'jobs web app',
			title: '{Job Listing Web App}',
			description:
				'Job Listing web app in React.JS using Firebase to store jobs asynchronously;',
			link: 'https://job-listing-39b59.web.app/',
		},
	],
};

export const socials = {
	socialLink: [
		{
			id: 0,
			icon: <ImFacebook />,
			link: 'https://www.facebook.com/naeem.carr.3',
		},
		{
			id: 1,
			icon: <ImInstagram />,
			link: 'https://www.instagram.com/naeem__carr',
		},
		{
			id: 2,
			icon: <ImLinkedin />,
			link: 'www.linkedin.com/in/mncarr',
		},
		{
			id: 3,
			icon: <ImGithub />,
			link: 'https://github.com/naeem2000',
		},
	],
};

export const filterButtons: string[] = [
	'all projects',
	'web development',
	'mobile development',
];

export const portolioData: PageData = {
	web: [
		{
			id: 0,
			image: '/projects/forecast-hub.png',
			alt: 'forecast hub',
			title: '{Forecast Hub}',
			description: `Weather App in React.Js & OpenWeatherMap API for searching countries and displaying current weather & 5 day forecast. Designed by Zaakirah Abrams;`,
			link: 'https://forecast-hub.vercel.app/',
		},
		{
			id: 1,
			image: '/projects/face-det.png',
			alt: 'mood detect web app',
			title: '{Mood Detector Web App}',
			description: 'A mood detector in React.JS using face-api.js;',
			link: 'https://job-listing-39b59.web.app/',
		},
		{
			id: 2,
			image: '/projects/job-listing.png',
			alt: 'Job Listing web app',
			title: '{Job Listing Web App}',
			description:
				'A job listing app in React.JS using jobs added to Firebase via the "add new job" feature;',
			link: 'https://job-listing-39b59.web.app/',
		},
		{
			id: 3,
			image: '/projects/life-health-care.png',
			alt: 'Life Healthcare web app',
			title: '{Life Healthcare}',
			description:
				'The second largest private hospital operator assigned to me at one of my previous companies;',
			link: 'https://job-listing-39b59.web.app/',
		},
		{
			id: 4,
			image: '/projects/magnetic.png',
			alt: 'Magnetic BNB',
			title: '{Life Healthcare}',
			description:
				'A local Air BNB provider that was one of my freelance work;',
			link: 'https://job-listing-39b59.web.app/',
		},
		{
			id: 5,
			image: '/projects/nova.png',
			alt: 'Nova Athletics',
			title: '{Nova Athletics}',
			description:
				'A small South African company that vendors athletic gear and outfits throughout South Africa that was one of my freelance work;',
			link: 'https://job-listing-39b59.web.app/',
		},
		{
			id: 6,
			image: '/projects/payat.png',
			alt: 'payat',
			title: '{PayAt}',
			description:
				'A payment provider that allows users to process payments to multiple companies and services throughout South Africa which was assigned to me at one of my previous companies;',
			link: 'https://job-listing-39b59.web.app/',
		},
		{
			id: 7,
			image: '/projects/polished-lounge.png',
			alt: 'polished lounge',
			title: '{Polised Lounge}',
			description:
				'A local business that offers pedicures and manicures that was one of my freelance work;',
			link: 'https://job-listing-39b59.web.app/',
		},
		{
			id: 8,
			image: '/projects/shafieks-carwash.png',
			alt: 'shafieks carwash',
			title: '{Shafieks Carwash}',
			description: 'A local carwash that was one of my freelance work;',
			link: 'https://job-listing-39b59.web.app/',
		},
		{
			id: 9,
			image: '/projects/smarter-britain.png',
			alt: 'smarter britain',
			title: '{Smarter Britain}',
			description:
				'A UK owned platform for students to connect with entrepreneurs and investors to receive advice, guidance and funding for their business that was assigned to me at one of my previous companies;',
			link: 'https://job-listing-39b59.web.app/',
		},
		{
			id: 10,
			image: '/projects/taquanta.png',
			alt: 'taquanta',
			title: '{Taquanta}',
			description:
				'A South African owned business for asset management assigned to me at one of my previous companies;',
			link: 'https://job-listing-39b59.web.app/',
		},
	],
	mobile: [
		{
			id: 0,
			image: '/projects/memory-game.png',
			alt: 'cerebral twist mobile app',
			title: '{Cerebral Twist Mobile App}',
			description:
				'Memory game in React-Native, using firebase to track scores located in the scoreboard screen, using email, username & password;',
			link: 'https://github.com/naeem2000/Cerebral-Twist',
		},
		{
			id: 1,
			image: '/projects/cmrmrn.jpg',
			alt: 'mosque mobile',
			title: '{Claremont Mosque Mobile App}',
			description:
				'React-Native mobile app representing Claremont Main Road Mosque with contentful headless API to manage the content;',
			link: 'https://github.com/naeem2000/Claremont-Mosque-React-Native',
		},
		{
			id: 2,
			image: '/projects/newsrn.jpg',
			alt: 'news mobile',
			title: '{News24 API Mobile App}',
			description:
				'React-Native mobile app representing a news app utilizing a News24 API;',
			link: 'https://github.com/naeem2000/Claremont-Mosque-React-Native',
		},
		{
			id: 3,
			image: '/projects/todorn.jpg',
			alt: 'Todo mobile',
			title: '{ToDo Mobile App}',
			description:
				'React-Native mobile app basic ToDo app that respresented my proper use of state and array methods by updating stae in realtime without effecting performance;',
			link: 'https://github.com/naeem2000/Claremont-Mosque-React-Native',
		},
	],
};
