import React, { useState, useEffect } from 'react';
import { Drawer } from 'react-rainbow-components';

function Navbar() {
	const [ isOpen, setIsOpen ] = useState(false);
	const onDrawerHandler = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className="navbar">
			<div className="logoWrap">
				<img src="/images/logo.png" alt="Develophoria" />
			</div>
			<div className="barWrap">
				<h1 onClick={() => onDrawerHandler()} className="bars">
					&#9776;
				</h1>
			</div>

			<Drawer isOpen={isOpen} onRequestClose={() => onDrawerHandler()}>
				<div className="linkWrap">
					<a onClick={() => onDrawerHandler()} href="#home" className="links">
						Home
					</a>
					<a onClick={() => onDrawerHandler()} href="#about" className="links">
						About
					</a>
					<a onClick={() => onDrawerHandler()} href="#portfolio" className="links">
						Portfolio
					</a>
					<div className="contactWrap">
						<a href="#letstalk" onClick={() => onDrawerHandler()} className="contact">
							Contact Me
						</a>
					</div>
				</div>
			</Drawer>
		</nav>
	);
}

export default Navbar;
