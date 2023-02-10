import React, { useState, useEffect, forwardRef } from "react";
import logo from "../img/icons/logo.svg";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { title: "Обо мне", href: "#about" },
  { title: "Портфолио", href: "#portfolio" },
  { title: "Навыки и образование", href: "#skills" },
  { title: "Фотография", href: "#photo" },
];

const headerAnimation = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
      type: "spring",
      bounce: 0,
      velosity: 10,
    },
  }),
};

function Header() {
  const [webMenuShown, setWebmenuShown] = useState(false);
  const [webVersion, setWebVersion] = useState(
    document.documentElement.clientWidth > 992 ? false : true
  );

  useEffect(() => {
    const handleResize = () => {
      setWebVersion(document.documentElement.clientWidth > 992 ? false : true);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      animate="visible"
      viewport={{ once: true }}
      className="position-absolute top-0 start-0 end-0"
    >
      <nav className="navbar navbar-dark navbar-expand-lg pt-0 pb-0">
        <div className="container-xl">
          <motion.a
            custom={4}
            variants={headerAnimation}
            className="navbar-brand"
            href="/"
          >
            <img
              className="header-logo text-custom-hover"
              src={logo}
              alt="valinka logo"
            />
          </motion.a>
          <AnimatePresence>
            {webVersion ? (
              <>
                <motion.button
                  custom={5}
                  variants={headerAnimation}
                  className="navbar-toggler"
                  type="button"
                  onClick={() => setWebmenuShown(!webMenuShown)}
                >
                  <span className="navbar-toggler-icon"></span>
                </motion.button>
                {webMenuShown && (
                  <div className="navbar-collapse justify-content-center">
                    <ul className="navbar-nav bg-dark sticky-top">
                      {links.map((link, index) => (
                        <MNavLink
                          custom={index + 1}
                          variants={headerAnimation}
                          key={index}
                          {...link}
                        />
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <div className="collapse navbar-collapse justify-content-center">
                <ul className="navbar-nav bg-dark sticky-top">
                  {links.map((link, index) => (
                    <MNavLink
                      custom={index + 6}
                      variants={headerAnimation}
                      key={link.title}
                      {...link}
                    />
                  ))}
                </ul>
              </div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      <motion.div
        custom={10}
        variants={headerAnimation}
        className="shadow-sm"
        style={{
          height: "4px",
          width: "100%",
        }}
      />
    </motion.header>
  );
}

const NavLink = forwardRef(({ title, href }, ref) => (
  <li ref={ref} className="nav-item">
    <a className="nav-link text-light text-custom-hover fs-5" href={href}>
      {title}
    </a>
  </li>
));

NavLink.displayName = "NavLink";

const MNavLink = motion(NavLink);

export default Header;
