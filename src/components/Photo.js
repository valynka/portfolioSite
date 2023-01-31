import React from "react";
import GalleryNav from "./GalleryNav";
import GalleryContent from "./GalleryContent";
import galleryLandscape from "../data/galleryLandscape";
import galleryFlip from "../data/galleryFlip";

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
      <section className="pt-6 pb-6" id="photo">
        <div className="container-xl">
          <h2 className="mb-4 mb-md-5 ls-25 h1">Фотография</h2>
          <GalleryNav
            type={chosenType}
            tabs={tabs}
            changeTypeHandler={this.changeTypeHandler}
          />
          <GalleryContent type={chosenType} tabContent={tabContent} />
        </div>
      </section>
    );
  }
}

export default Photo;
