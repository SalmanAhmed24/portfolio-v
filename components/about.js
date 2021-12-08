import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function About() {
	useEffect(() => {
		AOS.init({
			// initialise with other settings
			duration: 2500
		});
	}, []);

	return (
		<div className="aboutWrap" id="about">
			<div className="svgCon" data-aos="fade-right" />
			<div className="aboutInfoWrap" data-aos="fade-left">
				<h1 className="aboutHeading">A little bit</h1>
				<h1 className="aboutHeading2">about me</h1>
				<p className="aboutPara">
					My name is Salman Ahmed Abbasi. I am founder of <span>Develophoria</span>. I have been working as a
					Frontend Web developer for almost 3 years now. I have expertise in both frontend as well as backend
					development. My stack consists of HTML5/CSS3, SCSS, PSD to HTML, JavaScript, React, Next, React
					Native, Node, Express, MongoDB, Vercel and Heroku. My main goal is to make the best web application
					that represents your brand and product perfectly.
				</p>
				<h5 className="letsTalk">
					<a href="#letstalk">
						Lets talk <span className="arrow">&#8594;</span>
					</a>
				</h5>
			</div>
		</div>
	);
}

export default About;
