import React from "react";
import portfolio from "../data/portfolio.js";
import { MPortfolioItem } from "./PortfolioItem.js";
import _ from "lodash";
import { motion } from "framer-motion";
import useScreenVersion from "../hooks/useScreenVersion.js";
import getFlexItemDelay from "../functions/getFlexItemDelay";

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
  const screenVersion = useScreenVersion();

  let flexItemsCountInRow = "";

  const amount = screenVersion === "lg" ? 0.2 : 0;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: amount, once: true }}
      className="pt-6 pb-md-6"
      id="portfolio"
    >
      <div className="container-xl overflow-hidden">
        <motion.h2 variants={textAnimation} className="mb-4 mb-md-5 ls-25 h1">
          Портфолио
        </motion.h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 overflow-hidden">
          {portfolio.map((item, index) => {
            switch (screenVersion) {
              case "lg":
              case "medium":
                flexItemsCountInRow = 3;
                break;
              case "small":
                flexItemsCountInRow = 2;
                break;
              case "xsmall":
                flexItemsCountInRow = 1;
                break;
            }
            let delayNumber = getFlexItemDelay(index, flexItemsCountInRow);

            return (
              <MPortfolioItem
                initial={{ y: 100, opacity: 0 }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: (delayNumber + 1) * 0.1,
                    type: "spring",
                    bounce: 0,
                    velosity: 10,
                  },
                }}
                viewport={{ amount: 0.3, once: true }}
                key={_.uniqueId()}
                {...item}
              />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio;
