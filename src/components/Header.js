import React from 'react';
import cn from 'classnames';

function Header (props) {	
	const { webMenuHandler } = props;
	const { webMenuShown } = props;
	const navbarStyles = cn('collapse', 'navbar-collapse', {
		'show': webMenuShown,
	});

	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-xl">
					<a className="navbar-brand" href="/">Valinka</a>
					<button className="navbar-toggler" type="button" onClick={webMenuHandler}>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className={navbarStyles}>
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="#about">Обо мне</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#portfolio">Frontend-разработка</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#getcourse">GetCourse</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#photo">Фотография</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
	
}

export default Header;
