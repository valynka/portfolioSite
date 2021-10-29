import React from 'react';
import cn from 'classnames';

function NavbarList (props) {
    const { dropDownHandler } = props;
    const { webDevMenuShown } = props;
    const dropDownItemStyle = cn('nav-item', 'dropdown', {
		'show': webDevMenuShown,
	});
	const dropDownListStyle = cn('dropdown-menu', {
		'show': webDevMenuShown,
	});
    return (
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#about">Обо мне</a>
                </li>
                <li className={dropDownItemStyle}>
                    <a className="nav-link dropdown-toggle" href="#web" onClick={dropDownHandler}>
                        Веб-разработка
                    </a>
                    <ul className={dropDownListStyle}>
                        <li><a className="dropdown-item" href="#skills">Навыки и образование</a></li>
                        <li><a className="dropdown-item" href="#portfolio">Портфолио</a></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#photo">Фотография</a>
                </li>
            </ul>
        </div>
    );
}
export default NavbarList;