import { motion } from "framer-motion";
import React from "react";
import { MGalleryNav } from "./GalleryNav";
import GalleryContent from "./GalleryContent";
import galleryLandscape from "../data/galleryLandscape";
import galleryFlip from "../data/galleryFlip";

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

const navAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.4, duration: 0.2 },
  },
};

class Photo extends React.Component {
  state = {
    uiState: {
      chosenType: "landscape",
    },
    data: {
      tabs: [
        { tabId: "landscape", name: "Пейзаж" },
        { tabId: "flip", name: "Флип" },
      ],
      tabContent: [
        { tabId: "landscape", content: galleryLandscape },
        { tabId: "flip", content: galleryFlip },
      ],
    },
  };

  changeTypeHandler = (type) => () => {
    this.setState({ uiState: { chosenType: type } });
  };

  render() {
    const { chosenType } = this.state.uiState;
    const { tabs } = this.state.data;
    const { tabContent } = this.state.data;
    return (
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        className="pt-6 pb-6"
        id="photo"
      >
        <div className="container-xl overflow-hidden">
          <motion.h2
            variants={headerAnimation}
            className="mb-4 mb-md-5 ls-25 h1"
          >
            Фотография
          </motion.h2>
          <MGalleryNav
            variants={navAnimation}
            type={chosenType}
            tabs={tabs}
            changeTypeHandler={this.changeTypeHandler}
          />
          <GalleryContent type={chosenType} tabContent={tabContent} />
        </div>
      </motion.section>
    );
  }
}

export default Photo;
