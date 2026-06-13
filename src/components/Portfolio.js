import React from "react";
import {
  portfolioWeb,
  articles,
  products,
  dogPosts,
} from "../data/portfolio.js";
import { MPortfolioWebItem } from "./PortfolioWebItem.js";
import { MPortfolioArticleItem } from "./PortfolioArticleItem.js";
import { MPortfolioProductItem } from "./PortfolioProductItem.js";
import { MPortfolioDogsItem } from "./PortfolioDogsItem.js";

import _ from "lodash";
import { motion } from "framer-motion";
import useScreenVersion from "../hooks/useScreenVersion.js";
import getFlexItemDelay from "../functions/getFlexItemDelay";

const textAnimation = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.8, delay: i * 0.1 },
  }),
};

const backgroundVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.15,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function Portfolio() {
  const screenVersion = useScreenVersion();

  let flexItemsCountInRow = "";

  return (
    <section className="pt-6 pb-md-6" id="portfolio">
      <div className="container-xl overflow-hidden">
        <motion.h2
          variants={textAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-4 mb-md-5 ls-25 h1"
        >
          Портфолио
        </motion.h2>

        <section className="pb-5 mb-5">
          <motion.h3
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="mb-4 mb-md-5 ls-9"
          >
            Статьи
          </motion.h3>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 overflow-hidden">
            {articles.map((item, index) => {
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
                <MPortfolioArticleItem
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: (delayNumber + 1) * 0.2,
                      type: "spring",
                      bounce: 0,
                    },
                  }}
                  viewport={{ amount: 0.3, once: true }}
                  key={_.uniqueId()}
                  {...item}
                />
              );
            })}
          </div>
        </section>
        <section className="pb-5 mb-5 pt-4 mt-5">
          <motion.h3
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="my-4 my-md-5 ls-9"
          >
            E-commerce: описания товаров для сайта
          </motion.h3>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 overflow-hidden">
            {products.map((item, index) => {
              switch (screenVersion) {
                case "lg":
                  flexItemsCountInRow = 4;
                  break;
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
                <MPortfolioProductItem
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: (delayNumber + 1) * 0.2,
                      type: "spring",
                      bounce: 0,
                    },
                  }}
                  viewport={{ amount: 0.3, once: true }}
                  key={_.uniqueId()}
                  {...item}
                />
              );
            })}
          </div>
        </section>

        <section className="pb-5 mb-5 pt-4 mt-5">
          <motion.h3
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="my-4 my-md-5 ls-9"
          >
            SMM: посты о жизни с собакой
          </motion.h3>

          <motion.div
            variants={backgroundVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 overflow-hidden pt-0 pb-4 px-md-4 py-md-4 mt-3 dogs-container"
          >
            {dogPosts.map((item, index) => {
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
                <MPortfolioDogsItem
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: (delayNumber + 1) * 0.2,
                      type: "spring",
                      bounce: 0,
                    },
                  }}
                  viewport={{ amount: 0.3, once: true }}
                  key={_.uniqueId()}
                  {...item}
                />
              );
            })}
          </motion.div>
        </section>

        <section className="pb-5 mb-5 pt-4 mt-5">
          <motion.h3
            variants={textAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            className="my-4 my-md-5 ls-9"
          >
            Web-разработка
          </motion.h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 overflow-hidden">
            {portfolioWeb.map((item, index) => {
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
                <MPortfolioWebItem
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: (delayNumber + 1) * 0.1,
                      type: "spring",
                      bounce: 0,
                    },
                  }}
                  viewport={{ amount: 0.3, once: true }}
                  key={_.uniqueId()}
                  {...item}
                />
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Portfolio;
