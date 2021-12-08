import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Portfolio() {
	useEffect(() => {
		AOS.init({
			// initialise with other settings
			duration: 2500
		});
	}, []);
	const viewProject = (route) => {
		window.open(route, '_blank');
	};
	return (
		<div className="portfolioWrap" id="portfolio" data-aos="fade-in">
			<h1 className="heading">Portfolio</h1>
			<div className="portfolioInfo">
				<div className="projectWrap" style={{ width: '600px' }}>
					<div className="projectImgWrap" style={{ backgroundImage: `url(/images/bookatutor.png)` }}>
						<div className="blurDiv" onClick={() => viewProject('https://bookatutor.net/')} />
					</div>
					<div className="projectImgWrap2" style={{ backgroundImage: `url(/images/content.png)` }}>
						<div className="blurDiv" onClick={() => viewProject('https://contentproz.com/')} />
					</div>
				</div>
				<div className="projectWrap2">
					<div className="projectImgWrap3" style={{ backgroundImage: `url(/images/meetshm.png)` }}>
						<div className="blurDiv" onClick={() => viewProject('http://meetshm.com/')} />
					</div>
				</div>
				<div className="projectWrap2">
					<div className="projectImgWrap4" style={{ backgroundImage: `url(/images/risetech.png)` }}>
						<div className="blurDiv" onClick={() => viewProject('https://risetech.pk/')} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
