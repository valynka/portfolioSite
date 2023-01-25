import React from 'react';
import cn from 'classnames';
import logo from "../img/icons/logo.svg";

function Header (props) {	
	const { webMenuShown } = props;
	const { webMenuHandler } = props;

	const navbarStyles = cn('collapse', 'navbar-collapse', 'justify-content-center', {
		'show': webMenuShown,
	});

	return (
		<header className='shadow position-absolute top-0 start-0 end-0'>
			<div className="container-xl">
				<nav className="navbar navbar-dark navbar-expand-lg pt-0 pb-0">					
					<a className="navbar-brand" href="/"><img className='header-logo text-custom-hover' src={logo} alt='valinka logo'/></a>
					<button className="navbar-toggler" type="button" onClick={webMenuHandler}><span className="navbar-toggler-icon"></span></button>
					<div className={navbarStyles}>
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link text-light text-custom-hover fs-5" href="#about">Обо мне</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-light text-custom-hover fs-5" href="#about">Портфолио</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-light text-custom-hover fs-5" href="#about">Навыки и образование</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-light text-custom-hover fs-5" href="#photo">Фотография</a>
							</li>
						</ul>
					</div>					
				</nav>
			</div>
		</header>
	)
	
}

export default Header;
