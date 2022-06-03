import React from "react";

function Footer () {
    const bgColorCopy = {
        backgroundColor: '#e9ecef',
    };
    const year = new Date().getFullYear();


    return (
        <footer>
            <div className="container-xl">
                <div className="d-sm-flex justify-content-between align-items-center">
                    <div className="contact">
                        <p><i className="fas fa-home me-3"></i> Moscow, Russia</p>
                        <p><i className="fas fa-envelope me-3"></i> <a href="mailto:valerie-kras@mail.ru">valerie-kras@mail.ru</a></p>
                        <p><i className="fas fa-phone me-3"></i> <a href="tel:+79250577959">+7 925 057 79 59</a></p>
                    </div>
                    <div className="social">
                        {/* <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://www.instagram.com/valinka_flipka/" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                            <i className="fab fa-instagram"></i>
                        </a> */}
                        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/valynka" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                            <i className="fab fa-github"></i>
                        </a>
                        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="https://ru.hexlet.io/u/valinka" target="_blank" rel="noopener noreferrer" role="button" data-mdb-ripple-color="dark">
                            <i className="hexlet"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center p-3" style={bgColorCopy}>
            © {year} Copyright: Valinka.ru
            </div>
        </footer>
    )
}

export default Footer;