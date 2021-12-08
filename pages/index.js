import Head from 'next/head';
import Navbar from '../components/navbar';
import Header from '../components/header';
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';
export default function Home() {
	return (
		<div>
			<Head>
				<title>Develophoria</title>
				<meta
					name="description"
					content="My name is Salman Ahmed Abbasi. I am founder of Develophoria. I have been working as a Frontend Web developer for almost 3 years now. I have expertise in both frontend as well as backend development. My stack consists of HTML5/CSS3, SCSS, PSD to HTML, JavaScript, React, Next, React Native, Node, Express, MongoDB, Vercel and Heroku. My main goal is to make the best web application that represents your brand and product perfectly."
				/>
				<meta
					name="keywords"
					content="HTML, HTML/CSS, Website, Web developer, frontend developer, front end developer, backend developer, back end developer, responsive website, CSS3, React js, Next js, Vercel, Heroku, Node js, mongoDB, React web application, digital agency, PSD to HTML, figma, adobe xd, react native, mobile application, crossbrowser"
				/>
				<link rel="icon" href="/DV.png" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className="mainWrap">
				<Navbar />
				<Header />
				<About />
				<Portfolio />
				<Contact />
			</div>
		</div>
	);
}
