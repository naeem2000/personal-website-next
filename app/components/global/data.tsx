import { ImFacebook, ImInstagram, ImLinkedin, ImGithub } from 'react-icons/im';
import { NavLinks, PageData, Services, Socials } from '../utils/types';
import { SiMui, SiNextdotjs, SiTypescript } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoFirebase } from 'react-icons/io5';
import { FiFramer } from 'react-icons/fi';
import {
	ROUTE_HOME,
	ROUTE_ABOUT,
	ROUTE_CONTACT,
	ROUTE_SERVICES,
	ROUTE_PORTFOLIO,
} from '@/app/Routes';
import {
	FaCss3,
	FaSass,
	FaNode,
	FaReact,
	FaHtml5,
	FaAngular,
} from 'react-icons/fa';

export const navlinks: NavLinks = {
	links: [
		{
			label: '_hero',
			link: ROUTE_HOME,
		},
		{
			label: '_about',
			link: ROUTE_ABOUT,
		},
		{
			label: '_portfolio',
			link: ROUTE_PORTFOLIO,
		},
		{
			label: '_services',
			link: ROUTE_SERVICES,
		},
		{
			label: '_contact',
			link: ROUTE_CONTACT,
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
			image: '/projects/cmrmrn.jpg',
			alt: 'mosque mobile',
			title: '{Claremont Mosque Mobile App}',
			description:
				'React-Native mobile app representing Claremont Main Road Mosque with contentful headless API to manage the content;',
			link: 'https://github.com/naeem2000/Claremont-Mosque-React-Native',
		},
		{
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
			image: '/projects/forecast-hub.png',
			alt: 'forecast hub',
			title: '{Forecast Hub}',
			description: `Weather App in React.Js & OpenWeatherMap API for searching countries and displaying current weather & 5 day forecast;`,
			link: 'https://forecast-hub-web.netlify.app/',
		},
		{
			image: '/projects/job-listing.png',
			alt: 'jobs web app',
			title: '{Job Listing Web App}',
			description:
				'Job Listing web app in React.JS using Firebase to store jobs asynchronously;',
			link: 'https://job-listing-39b59.web.app/',
		},
	],
};

export const socials: Socials = {
	socialLink: [
		{
			name: 'Facebook',
			icon: <ImFacebook />,
			link: 'https://www.facebook.com/naeem.carr.3',
		},
		{
			name: 'Instagram',
			icon: <ImInstagram />,
			link: 'https://www.instagram.com/naeem__carr',
		},
		{
			name: 'LinkedIn',
			icon: <ImLinkedin />,
			link: 'www.linkedin.com/in/mncarr',
		},
		{
			name: 'Github',
			icon: <ImGithub />,
			link: 'https://github.com/naeem2000',
		},
	],
};

export const filterButtons: string[] = [
	'all projects',
	'mobile development',
	'web development',
];

export const services: Services = [
	{
		number: '01',
		name: 'HTML',
		icon: <FaHtml5 color='#DB4C23' size={70} />,
		link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
	},
	{
		number: '02',
		name: 'CSS',
		icon: <FaCss3 color='#234CDD' size={70} />,
		link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
	},
	{
		number: '03',
		name: 'JavaScript',
		icon: <IoLogoJavascript color='#F1DC55' size={70} />,
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
	},
	{
		number: '04',
		name: 'TypeScript',
		icon: <SiTypescript color='#397CC8' size={70} />,
		link: 'https://www.typescriptlang.org/',
	},
	{
		number: '05',
		name: 'React.JS',
		icon: <FaReact color='#67DBFB' size={70} />,
		link: 'https://react.dev/',
	},
	{
		number: '06',
		name: 'Angular.JS',
		icon: <FaAngular color='#C50C35' size={70} />,
		link: 'https://angularjs.org/',
	},
	{
		number: '07',
		name: 'React-Native',
		icon: <FaReact color='#67DBFB' size={70} />,
		link: 'https://reactnative.dev/',
	},
	{
		number: '08',
		name: 'Next.Js',
		icon: (
			<SiNextdotjs
				color='#00000'
				className='bg-slate-50 rounded-full'
				size={70}
			/>
		),
		link: 'https://nextjs.org/',
	},
	{
		number: '09',
		name: 'Sass',
		icon: <FaSass color='#CE6B9B' size={70} />,
		link: 'https://sass-lang.com/',
	},
	{
		number: '10',
		name: 'Tailwind CSS',
		icon: <RiTailwindCssFill color='#35B7F0' size={70} />,
		link: 'https://tailwindcss.com/',
	},
	{
		number: '11',
		name: 'Node.JS',
		icon: <FaNode color='#8FC716' size={70} />,
		link: 'https://nodejs.org/en',
	},
	{
		number: '12',
		name: 'Firebase',
		icon: <IoLogoFirebase color='#FFCE35' size={70} />,
		link: 'https://firebase.google.com/',
	},
	{
		number: '13',
		name: 'Material UI',
		icon: <SiMui color='#1683FF' size={70} />,
		link: 'https://mui.com/',
	},
	{
		number: '14',
		name: 'Framer Motion',
		icon: <FiFramer color='#1683FF' size={70} />,
		link: 'https://motion.dev/',
	},
];

export const portfolioData: PageData = {
	web: [
		{
			image: '/projects/forecast-hub.png',
			alt: 'forecast hub',
			title: '{Forecast Hub}',
			description: `Weather App in React.Js & OpenWeatherMap API for searching countries and displaying current weather & 5 day forecast;`,
			link: 'https://forecast-hub-web.netlify.app/',
		},
		{
			image: '/projects/face-det.jpg',
			alt: 'mood detect web app',
			title: '{Mood Detector Web App}',
			description: 'A mood detector in React.JS using face-api.js;',
			link: 'https://face-detect-reactjs.netlify.app/',
		},
		{
			image: '/projects/job-listing.png',
			alt: 'Job Listing web app',
			title: '{Job Listing Web App}',
			description:
				'A job listing app in React.JS using jobs added to Firebase via the "add new job" feature;',
			link: 'https://job-listing-39b59.web.app/',
		},
		{
			image: '/projects/life-health-care.png',
			alt: 'Life Healthcare web app',
			title: '{Life Healthcare}',
			description:
				'The second largest private hospital operator assigned to me at one of my previous companies;',
			link: 'https://www.lifehealthcare.co.za/',
		},
		{
			image: '/projects/magnetic.png',
			alt: 'Magnetic BNB',
			title: '{Magnetic BNB}',
			description:
				'A local Air BNB provider that was one of my freelance work;',
			link: 'https://www.magneticproperty.co.za/',
		},
		{
			image: '/projects/nova.png',
			alt: 'Nova Athletics',
			title: '{Nova Athletics}',
			description:
				'A small South African company that vendors athletic gear and outfits throughout South Africa that was one of my freelance work;',
			link: 'https://nova-athletics.vercel.app/',
		},
		{
			image: '/projects/payat.png',
			alt: 'payat',
			title: '{PayAt}',
			description:
				'A payment provider that allows users to process payments to multiple companies and services throughout South Africa which was assigned to me at one of my previous companies;',
			link: 'https://payat.co.za/',
		},
		{
			image: '/projects/mira.png',
			alt: 'Mira',
			title: '{Mira}',
			description:
				'A todo app, using Jira as inspiration for teams, and Mira for individuals;',
			link: 'https://mira-todo.netlify.app/',
		},
		{
			image: '/projects/polished-lounge.png',
			alt: 'polished lounge',
			title: '{Polised Lounge}',
			description:
				'A local business that offers pedicures and manicures that was one of my freelance work;',
			link: 'https://polished-lounge.netlify.app/',
		},
		{
			image: '/projects/shafieks-carwash.png',
			alt: 'shafieks carwash',
			title: '{Shafieks Carwash}',
			description: 'A local carwash that was one of my freelance work;',
			link: 'https://shafiekscarwash.netlify.app/',
		},
		{
			image: '/projects/smarter-britain.png',
			alt: 'smarter britain',
			title: '{Smarter Britain}',
			description:
				'A UK owned platform for students to connect with entrepreneurs and investors to receive advice, guidance and funding for their business that was assigned to me at one of my previous companies;',
			link: 'https://smarterbritain.co.uk/',
		},
		{
			image: '/projects/taquanta.png',
			alt: 'taquanta',
			title: '{Taquanta}',
			description:
				'A South African owned business for asset management assigned to me at one of my previous companies;',
			link: 'https://taquanta.co.za/',
		},
		{
			image: '/projects/talent-usage.png',
			alt: 'talent usage',
			title: '{Talent Usage}',
			description: `A local South African company that eases the process by identifying usages for their clients in the media industry that was assigned to me at one of my previous companies;`,
			link: 'https://talentusage.com/',
		},
	],
	mobile: [
		{
			image: '/projects/rushtush.jpg',
			alt: 'rushtush',
			title: '{RushTush}',
			description:
				'A local South African entrepreneur providing a service for women wanting to sculpt up or become fit that was assigned to me at one of my previous companies;',
			link: 'private',
		},
		{
			image: '/projects/memory-game.png',
			alt: 'cerebral twist mobile app',
			title: '{Cerebral Twist Mobile App}',
			description:
				'Memory game in React-Native, using firebase to track scores located in the scoreboard screen, using email, username & password;',
			link: 'https://github.com/naeem2000/Cerebral-Twist',
		},
		{
			image: '/projects/cmrmrn.jpg',
			alt: 'mosque mobile',
			title: '{Claremont Mosque Mobile App}',
			description:
				'React-Native mobile app representing Claremont Main Road Mosque with contentful headless API to manage the content;',
			link: 'https://github.com/naeem2000/Claremont-Mosque-React-Native',
		},
		{
			image: '/projects/newsrn.jpg',
			alt: 'news mobile',
			title: '{News24 API Mobile App}',
			description:
				'React-Native mobile app representing a news app utilizing a News24 API;',
			link: 'https://github.com/naeem2000/React-Native-News-App',
		},
		{
			image: '/projects/todorn.jpg',
			alt: 'Todo mobile',
			title: '{ToDo Mobile App}',
			description:
				'React-Native mobile app basic ToDo app that respresented my proper use of state and array methods by updating stae in realtime without effecting performance;',
			link: 'https://github.com/naeem2000/react-native-todo-app',
		},
	],
};
