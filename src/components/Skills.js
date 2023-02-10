import { motion } from "framer-motion";
import React from "react";
import educationList from "../data/educationList.js";
import _ from "lodash";
import pug from "../img/tools/pug.png";
import html from "../img/tools/html.png";
import css from "../img/tools/css.png";
import js from "../img/tools/js.png";
import sass from "../img/tools/sass.png";
import bootstrap from "../img/tools/bootstrap.png";
import gulp from "../img/tools/gulp.png";
import react from "../img/tools/react.png";

const headerAnimation = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.8 },
  },
};

const textAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { type: "tween", duration: 0.6, delay: custom * 0.1 },
  }),
};

const imgAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom * 0.1, bounce: 0, duration: 0.1 },
  }),
};

function Skills() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="pt-6 pb-md-6"
      id="skills"
    >
      <div className="container-xl">
        <motion.h2 variants={headerAnimation} className="mb-4 mb-md-5 ls-25 h1">
          Навыки и образование
        </motion.h2>
        <div className="row mb-4">
          <div className="col-12 col-md-6 position-relative z-index-1">
            <motion.p custom={10} variants={textAnimation}>
              Создаю красивые и удобные для пользователя страницы. Придерживаюсь
              принципов кроссбраузерности, валидности и хорошей архитектуры
              кода.
            </motion.p>
            <motion.p custom={11} variants={textAnimation}>
              Применяю такие подходы как <b>OOCSS</b> и <b>Atomic CSS</b>. В
              работе использую <b>React</b>, <b>Pug</b>, <b>SCSS</b>,{" "}
              <b>Bootstrap</b> (создаю собственные утилиты и компоненты).
            </motion.p>
            <motion.p custom={12} variants={textAnimation}>
              Владею техниками верстки на Flexbox и Grid, создаю различные
              анимации с помощью CSS и JS.
            </motion.p>
            <motion.p custom={13} variants={textAnimation}>
              Работаю в командной строке linux, использую <b>make</b> и{" "}
              <b>gulp</b>.
            </motion.p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6, once: true }}
            className="tools-container col-12 col-md-6 position-relative"
          >
            <motion.img
              custom={2}
              variants={imgAnimation}
              className="tool-img pug-img"
              src={pug}
              alt="Pug js"
            />
            <motion.img
              custom={3}
              variants={imgAnimation}
              className="tool-img html-img"
              src={html}
              alt="HTML"
            />
            <motion.img
              custom={4}
              variants={imgAnimation}
              className="tool-img css-img"
              src={css}
              alt="CSS"
            />
            <motion.img
              custom={5}
              variants={imgAnimation}
              className="tool-img js-img"
              src={js}
              alt="JS"
            />
            <motion.img
              custom={6}
              variants={imgAnimation}
              className="tool-img sass-img"
              src={sass}
              alt="Sass"
            />
            <motion.img
              custom={7}
              variants={imgAnimation}
              className="tool-img bootstrap-img"
              src={bootstrap}
              alt="Bootstrap"
            />
            <motion.img
              custom={8}
              variants={imgAnimation}
              className="tool-img gulp-img"
              src={gulp}
              alt="Gulp"
            />
            <motion.img
              custom={9}
              variants={imgAnimation}
              className="tool-img react-img"
              src={react}
              alt="React"
            />
          </motion.div>
        </div>
        <div className="row mt-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.6, once: true }}
            className="col"
          >
            <motion.p
              custom={1}
              variants={textAnimation}
              className="overflow-hidden"
            >
              <b className="h5 ls-25">Высшее образование</b> &ndash;
              МГУ&nbsp;Печати, факультет издательского дела и журналистики,
              2009.
            </motion.p>
            <motion.p
              custom={2}
              variants={textAnimation}
              className="h5 ls-25 overflow-hidden mb-4"
            >
              <b>Курсы</b>:
            </motion.p>
            <ul className="courses">
              {educationList.map((course, index) => (
                <motion.li
                  custom={index + 6}
                  variants={textAnimation}
                  key={_.uniqueId()}
                >
                  <div>
                    <p className="institution fs-5">{course.institution}</p>
                    <p>{course.title}</p>
                  </div>
                  <p>{course.period}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
