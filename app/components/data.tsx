import { ImFacebook, ImInstagram, ImLinkedin, ImGithub } from 'react-icons/im';

export const navlinks = {
	links: [
		{
			id: 0,
			label: '_home',
			link: '#hero',
		},
		{
			id: 1,
			label: '_about',
			link: '#about',
		},
		{
			id: 2,
			label: '_portfolio',
			link: '#portfolio',
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

export const pageData = {
	block1: [
		{
			id: 0,
			image: '/cmrmrn.jpg',
			alt: 'mosque mobile',
			title: '{Claremont Mosque React-Native}',
			description:
				'React-Native mobile app representing Claremont Main Road Mosque;',
			link: 'https://www.google.com',
		},
		{
			id: 1,
			image: '/cmrmweb.jpg',
			alt: 'mosque web app',
			title: '{Claremont Mosque Web App}',
			description:
				'React.JS web app with contentful headless API to manage the content;',
			link: 'https://cmrm.netlify.app/',
		},
	],
	block2: [
		{
			id: 0,
			image: '/face-det.jpg',
			alt: 'face web app',
			title: '{Mood Detector}',
			description:
				'Mood Detector web app in React.JS using Face-API.JS library;',
			link: 'https://face-detect-reactjs.netlify.app/',
		},
		{
			id: 1,
			image: '/file-upload-to-firebase-webApp.jpg',
			alt: 'upload web app',
			title: '{File Upload Web App}',
			description: 'File uploading web app in React.JS and Firebase storage;',
			link: 'https://younglings-uploadtofirebase.netlify.app/',
		},
		{
			id: 2,
			image: '/job-listing.png',
			alt: 'jobs web app',
			title: '{Job Listing Web App}',
			description:
				'Job Listing web app in React.JS using Firebase to store jobs asynchronously;',
			link: 'https://job-listing-39b59.web.app/',
		},
		{
			id: 3,
			image: '/loginmui.jpg',
			alt: 'login MUI',
			title: '{Material Login Screen}',
			description: 'Login screen in React.JS using Material UI',
			link: 'https://login-react-app-puma.netlify.app/',
		},
	],
	block3: [
		{
			id: 0,
			image: '/shafieks-carwash.jpg',
			alt: 'face web app',
			title: '{Mood Detector}',
			description:
				'Mood Detector web app in React.JS using Face-API.JS library;',
			link: 'https://shafiekscarwash.netlify.app/',
		},
		{
			id: 1,
			image: '/todoweb.jpg',
			alt: 'upload web app',
			title: '{File Upload Web App}',
			description: 'File uploading web app in React.JS and Firebase storage;',
			link: 'https://to-do-webapp011.netlify.app/',
		},
		{
			id: 2,
			image: '/weather.jpg',
			alt: 'upload web app',
			title: '{File Upload Web App}',
			description: 'File uploading web app in React.JS and Firebase storage;',
			link: 'https://weatherreactjsweb.netlify.app/',
		},
	],
	block4: [
		{
			id: 0,
			image: '/newsrn.jpg',
			alt: 'face web app',
			title: '{Mood Detector}',
			description:
				'Mood Detector web app in React.JS using Face-API.JS library;',
			link: 'https://github.com/naeem2000/React-Native-News-App',
		},
		{
			id: 1,
			image: '/todorn.jpg',
			alt: 'upload web app',
			title: '{File Upload Web App}',
			description: 'File uploading web app in React.JS and Firebase storage;',
			link: 'https://github.com/naeem2000/react-native-todo-app',
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
