import React from 'react';

function NavbarList () {
    
    return (
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#about">Обо мне</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#getcourse">GetCourse</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Frontend-разработка</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#photo">Фотография</a>
                </li>
            </ul>
        </div>
    );
}
export default NavbarList;