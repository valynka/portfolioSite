import React from "react";
import avatar from "../img/avatar-2025.jpg";
import { motion } from "framer-motion";

const textAnimation = {
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

const photoAnimation = {
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

function AboutMe() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      className="pb-md-6"
      id="about"
    >
      <div className="container-xl">
        <div className="row pb-4">
          <motion.div
            variants={textAnimation}
            className="col-md-8 col-12 ps-md-6 pe-md-6 overflow-hidden order-lg-2"
          >
            <h1 className="mb-3 mb-md-4 ls-25 h2">Привет!</h1>

            <p>Меня зовут Валерия. Я редактор и контент-менеджер.</p>
            <p>
              Я работала с разными текстами: юридической литературой, описаниями
              товаров, инструкциями, технической документацией и статьями.
            </p>
            <p>
              Делаю тексты полезными и понятными для людей. Благо, теперь не
              нужно напичкивать статьи ключевыми словами, чтобы они стали
              заметными для поисковиков.
            </p>
            <p>
              Могу написать текст полностью сама, но в сложных темах — например,
              медицине или электротехнике — работаю только в сотрудничестве с
              экспертами.
            </p>
            <p>
              Я не только пишу и редактирую тексты, но и выкладываю контент на
              сайт: подбираю и обрабатываю изображения, слежу за актуальностью
              информации. Проверяю работоспособность, адаптивность и удобство
              страниц. Могу работать в разных CMS (1С-Битрикс, WordPress, ModX,
              самописные админки).
            </p>
            <p>
              Умею верстать лендинги на чистом HTML, CSS и JS по макетам из
              Figma или Photoshop. Этот сайт я сделала на React и Bootstrap (код
              есть на{" "}
              <a
                href="https://github.com/valynka/portfolioSite"
                className="link-custom text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              ).
            </p>
            <p>
              То, что вам не обязательно обо мне знать, но может быть интересно:
              я увлекаюсь фотографией — внизу есть галерея с моими любимыми
              снимками. А ещё интересуюсь психологией людей и собак.
              Осведомлённость в первой помогает выстраивать хорошие отношения с
              окружающими и лучше понимать читателей. Знание второй (я
              сертифицированный специалист по поведению собак) делает жизнь
              моего корги Флипа лёгкой и радостной.
            </p>
          </motion.div>
          <motion.div
            variants={photoAnimation}
            className="col-md-4 col-12 d-flex justify-content-center justify-content-md-start align-items-start order-lg-1"
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
