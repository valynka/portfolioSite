import React from 'react';
import cn from 'classnames';
import logo from "../img/icons/logo.svg";

function Header (props) {	
	const { webDevMenuShown } = props;
	const { dropDownHandler } = props;

	const dropDownItemStyle = cn('nav-item', 'dropdown', {
		'show': webDevMenuShown,
	});
	const dropDownListStyle = cn('dropdown-menu', {
		'show': webDevMenuShown,
	});

	return (
		<header className='shadow mb-5'>
			<div className="container-xl">
				<nav className="navbar navbar-expand-lg pt-0 pb-0">					
					<a className="navbar-brand" href="/"><img className='header-logo text-custom-hover' src={logo} alt='valinka logo'/></a>
					<div className="collapse navbar-collapse justify-content-center">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link text-light text-custom-hover fs-5" href="#about">Обо мне</a>
							</li>
							<li className={dropDownItemStyle}>
								<a className="nav-link text-light text-custom-hover fs-5 dropdown-toggle" href="#!" onClick={dropDownHandler}>
									Веб-разработка
								</a>
								<ul className={dropDownListStyle}>
									<li><a className="dropdown-item" href="#skills">Навыки и образование</a></li>
									<li><a className="dropdown-item" href="#portfolio">Портфолио</a></li>
								</ul>
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
