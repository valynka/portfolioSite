import React from "react";

function Footer () {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="container-xl mt-4 mt-md-6 pb-1 text-custom">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-top pt-3 pt-md-0">
                    <div className="d-flex flex-column flex-md-row gap-3 gap-md-5 align-items-center">
                        <p className="mb-0"><i className="fa fa-home me-1"></i>Moscow, Russia</p>
                        <p className="mb-0"><i className="fa fa-envelope me-1"></i> <a className="text-custom text-decoration-none" href="mailto:valerie-kras@mail.ru">valerie-kras@mail.ru</a></p>
                        <p className="mb-0"><i className="fa fa-phone me-1"></i> <a className="text-custom text-decoration-none" href="tel:+79250577959">+7 925 057 79 59</a></p>
                    </div>
                    <div className="social">
                        <a className="btn btn-link btn-floating btn-lg m-1 text-custom" href="https://www.instagram.com/valinka_flipka/" target="_blank" rel="noopener noreferrer" role="button">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a className="btn btn-link btn-floating btn-lg m-1 text-custom" href="https://github.com/valynka" target="_blank" rel="noopener noreferrer" role="button">
                            <i className="fa fa-github"></i>
                        </a>
                        <a className="btn btn-link btn-floating btn-lg m-1 text-custom" href="https://ru.hexlet.io/u/valinka" target="_blank" rel="noopener noreferrer" role="button">
                            <i className="hexlet"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center bg-black bg-opacity-25 p-3 pb-4 text-custom">
                © {year} Copyright: Valinka.ru
            </div>          
        </footer>
    )
}

export default Footer;