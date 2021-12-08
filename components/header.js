function Header() {
	return (
		<div className="headerWrap" id="home">
			<div className="headerInfoWrap">
				<span className="subHead">Hi,</span>
				<h1>
					Its <span className="name">Salman</span>
				</h1>
				<span className="spanCus">
					I am a Web & Mobile application developer. I am here to provide my services
				</span>
				<h5 className="letsTalk">
					<a href="#letstalk">
						Lets talk <span className="arrow">&#8594;</span>
					</a>
				</h5>
			</div>
			<div className="headerImageWrap">
				<div className="pyramidImg">
					<img src="/images/sass.svg" className="img1" alt="Web developer" />
				</div>
				<div className="pyramidImg2">
					<img src="/images/react.png" className="img2" alt="Web developer" />
				</div>
				<div className="pyramidImg3">
					<img src="/images/node.png" className="img3" alt="Web developer" />
				</div>
				<div className="pyramidImg4">
					<img src="/images/database.png" className="img4" alt="Web developer" />
				</div>
				<img src="/images/web.svg" className="mainImg" alt="Salman Ahmed" />
			</div>
		</div>
	);
}

export default Header;
