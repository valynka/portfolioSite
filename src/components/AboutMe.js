import React from "react";
import avatar from "../img/avatar.jpg";
import { motion } from "framer-motion";

const textAnimation = {
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

const photoAnimation = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.8 },
  },
};

function AboutMe() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      className="pb-md-6"
      id="about"
    >
      <div className="container-xl overflow-hidden">
        <div className="row pb-4">
          <motion.div
            variants={textAnimation}
            className="col-md-8 col-12 ps-md-6 pe-md-6"
          >
            <h1 className="mb-3 mb-md-4 ls-25 h2">Привет!</h1>
            <p>
              Меня зовут <b>Валерия Красных</b>. Я занимаюсь{" "}
              <b>html-версткой</b> и <b>frontend-разработкой</b>.
            </p>
            <p>
              По образованию я редактор, а еще увлекаюсь фотографией и
              кинологией.
            </p>
            <p>
              Ниже есть примеры сверстанных мной страниц и небольших
              компонентов, написанных на JavaScript.
            </p>
            <p>
              Свой сайт я создала, используя <b>React</b> и <b>Bootstrap</b>.
              Код есть на{" "}
              <a
                href="https://github.com/valynka/portfolioSite"
                className="link-custom text-decoration-none"
              >
                GitHub
              </a>
              .
            </p>
            <p>
              И, конечно, не могла не выложить здесь фотогалерею, в которой
              целый альбом посвящен моему корги по имени Флип.
            </p>
          </motion.div>
          <motion.div
            variants={photoAnimation}
            className="col-md-4 col-12 d-flex justify-content-center justify-content-md-start align-items-start"
          >
            <div className="avatar-img w-75 w-sm-50 w-md-80 w-lg-75 mt-5 mt-md-0">
              <img className="w-100 rounded-1" src={avatar} alt="avatar" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutMe;
