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
			image: '/cmrmrn.jpg',
			alt: 'mosque mobile',
			title: '{Claremont Mosque Mobile App}',
			description:
				'React-Native mobile app representing Claremont Main Road Mosque with contentful headless API to manage the content;',
			link: 'https://github.com/naeem2000/Claremont-Mosque-React-Native',
		},
		{
			id: 1,
			image: '/memory-game.png',
			alt: 'cerebral twist mobile app',
			title: '{Cerebral Twist Mobile App}',
			description:
				'Memory game in React-Native, using firebase to track scores located in the scoreboard screen, using email, username & password;',
			link: 'https://github.com/naeem2000/Cerebral-Twist',
		},
		{
			id: 2,
			image: '/newsrn.jpg',
			alt: 'news app',
			title: '{News App React-Native}',
			description: 'News Mobile App in React-Native & News24 API;',
			link: 'https://github.com/naeem2000/React-Native-News-App',
		},
		{
			id: 3,
			image: '/todorn.jpg',
			alt: 'todo react-native',
			title: '{Todo App React-Native}',
			description: 'Todo Mobile App in React-Native & basic JS;',
			link: 'https://github.com/naeem2000/react-native-todo-app',
		},
	],
	web: [
		{
			id: 0,
			image: '/weather.png',
			alt: 'forecast hub',
			title: '{Forecast Hub}',
			description: `Weather App in React.Js & OpenWeatherMap API for searching countries and displaying current weather & 5 day forecast. Designed by Zaakirah Abrams;`,
			link: 'https://forecast-hub.vercel.app/',
		},
		{
			id: 1,
			image: '/job-listing.png',
			alt: 'jobs web app',
			title: '{Job Listing Web App}',
			description:
				'Job Listing web app in React.JS using Firebase to store jobs asynchronously;',
			link: 'https://job-listing-39b59.web.app/',
		},
		{
			id: 2,
			image: '/file-upload-to-firebase-webApp.jpg',
			alt: 'upload web app',
			title: '{File Upload Web App}',
			description: 'File uploading web app in React.JS and Firebase storage;',
			link: 'https://younglings-uploadtofirebase.netlify.app/',
		},
		{
			id: 3,
			image: '/loginmui.jpg',
			alt: 'login MUI',
			title: '{Material Login Screen}',
			description: 'Login screen in React.JS using Material UI;',
			link: 'https://login-react-app-puma.netlify.app/',
		},
		{
			id: 4,
			image: '/shafieks-carwash.png',
			alt: 'shafieks car wash',
			title: `{Shafiek's Car Wash}`,
			description: 'Local Car Wash Web App in React.Js, Next.Js and SCSS;',
			link: 'https://shafiekscarwash.netlify.app/',
		},
		{
			id: 5,
			image: '/face-det.jpg',
			alt: 'face web app',
			title: '{Mood Detector}',
			description:
				'Mood Detector web app in React.JS using Face-API.JS library;',
			link: 'https://face-detect-reactjs.netlify.app/',
		},
		{
			id: 6,
			image: '/cmrmweb.jpg',
			alt: 'mosque web app',
			title: '{Claremont Mosque Web App}',
			description:
				'React.Js mobile app representing Claremont Main Road Mosque with contentful headless API to manage the content;',
			link: 'https://cmrm.netlify.app/',
		},
		{
			id: 7,
			image: '/todoweb.jpg',
			alt: 'todo web',
			title: '{Todo Web App}',
			description: 'Todo Web App in React.js and basic JS;',
			link: 'https://to-do-webapp011.netlify.app/',
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
