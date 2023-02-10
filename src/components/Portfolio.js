import React, { useState, useEffect } from "react";
import portfolio from "../data/portfolio.js";
import { MPortfolioItem } from "./PortfolioItem.js";
import _ from "lodash";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.8, velosity: 10 },
  },
};

function Portfolio() {
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

  const amount = webVersion ? 0 : 0.2;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: amount, once: true }}
      className="pt-6 pb-md-6"
      id="portfolio"
    >
      <div className="container-xl">
        <motion.h2 variants={textAnimation} className="mb-4 mb-md-5 ls-25 h1">
          Портфолио
        </motion.h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 overflow-hidden">
          {portfolio.map((item, index) => (
            <MPortfolioItem
              initial={{ y: 100, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: webVersion ? 0 : (index + 6) * 0.1,
                  type: "spring",
                  bounce: 0,
                  velosity: 10,
                },
              }}
              viewport={{ amount: 0.2, once: true }}
              key={_.uniqueId()}
              {...item}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio;
