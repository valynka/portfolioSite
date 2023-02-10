import React from "react";
import { motion } from "framer-motion";

const citationAnimation = {
  hidden: {
    y: 350,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0,
      type: "spring",
      damping: 15,
      stiffness: 40,
    },
  },
};

function Citation() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="citation d-flex justify-content-center align-items-center"
    >
      <div className="container">
        <motion.blockquote
          variants={citationAnimation}
          className="quote w-100 w-md-75 text-custom"
        >
          <div className="quote-body">
            Если оптимизировать всё, что можно, то вы будете вечно несчастным.
          </div>
          <div className="quote-footer">
            <cite>Дональд Эрвин Кнут</cite>
          </div>
        </motion.blockquote>
      </div>
    </motion.section>
  );
}

export default Citation;
