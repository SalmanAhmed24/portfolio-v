import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Contact() {
	useEffect(() => {
		AOS.init({
			// initialise with other settings
			duration: 2500
		});
	}, []);
	return (
		<div className="contactWrapCus" id="letstalk">
			<div className="contactInfoWrap" data-aos="fade-left">
				<span>Contact us</span>
				<h1>Lets talk</h1>
				<div className="socialWrap">
					<a rel="noopener" href="https://www.fiverr.com/fullstack_dev24">
						<img src="/images/fi.png" className="iconsCus" alt="Fiverr" />
					</a>
					<a rel="noopener" href="https://www.linkedin.com/in/salman-ahmed-abbasi-86a5bb10b/">
						<img src="/images/in.png" className="iconsCus" alt="LinkedIn" />
					</a>
					<a rel="noopener" href="https://github.com/SalmanAhmed24">
						<img src="/images/git.png" className="iconsCus" alt="Github" />
					</a>
					<a rel="noopener" href="https://www.upwork.com/freelancers/~0117e6f33ebceef457?viewMode=1">
						<img src="/images/up.png" className="iconsCus" alt="Upwork" />
					</a>
				</div>
			</div>
			<div className="emailWrap" data-aos="fade-right">
				<div className="emailLinks">
					<a href="tel:923045398797">03045398797</a>
					<a href="mailto:salman@siliconhillsmarketing">salman@siliconhillsmarketing</a>
				</div>
				<div className="emailPara">
					<p>Providing creative ideas for your business</p>
				</div>
			</div>
		</div>
	);
}

export default Contact;
