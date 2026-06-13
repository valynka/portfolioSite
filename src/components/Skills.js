import { motion } from "framer-motion";
import React from "react";
import educationList from "../data/educationList.js";
import _ from "lodash";
import skills from "../data/skills";

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
    transition: { type: "tween", duration: 0.8, delay: custom * 0.1 },
  }),
};

function Skills() {
  return (
    <section className="pt-6 pb-md-6" id="skills">
      <div className="container-xl">
        <motion.h2
          variants={headerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-4 mb-md-5 ls-25 h1"
        >
          Профессиональные компетенции
        </motion.h2>

        <div className="skills-education__wrapper">
          <div className="row g-7">
            <div className="col-lg-6">
              <motion.h2
                className="mb-5 text-custom"
                custom={2}
                variants={textAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1, once: true }}
              >
                Навыки
              </motion.h2>

              {skills.map((skill, index) => (
                <motion.div
                  className="skill-group"
                  key={_.uniqueId()}
                  custom={index + skills.length}
                  variants={textAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.1, once: true }}
                >
                  <h3 className="text-custom">{skill.title}</h3>
                  <p>{skill.content}</p>
                </motion.div>
              ))}
            </div>

            <div className="col-lg-6">
              <motion.h2
                className="mb-5 text-custom"
                custom={2}
                variants={textAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
              >
                Образование
              </motion.h2>
              <div className="timeline">
                {educationList.map((ed, index) => (
                  <motion.div
                    className="timeline-item"
                    key={_.uniqueId()}
                    custom={index + educationList.length}
                    variants={textAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true }}
                  >
                    <span className="timeline-year">{ed.period}</span>
                    <div className="timeline-content">
                      <h3>{ed.title}</h3>
                      <p>{ed.institution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
