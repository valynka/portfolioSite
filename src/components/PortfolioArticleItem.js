import { motion } from "framer-motion";
import React, { forwardRef } from "react";
import { Fancybox } from "@fancyapps/ui";

const PortfolioArticleItem = forwardRef(
  ({ img, title, alt, popupContent, id }, ref) => {
    const openPopup = () => {
      if (!popupContent) return;

      Fancybox.show([{ src: `#${id}`, type: "inline" }], {
        Navigation: false,
        Carousel: { gestures: false },
        width: "60%",
        height: "80%",
      });
    };

    const handleKeyDown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openPopup();
      }
    };

    return (
      <div
        className="col article-portfolio-item"
        ref={ref}
        role="button"
        tabIndex={0}
        onClick={openPopup}
        onKeyDown={handleKeyDown}
        style={{ cursor: "pointer", outline: "none" }}
      >
        <div className="card h-100 p-3">
          <div className="article-card-img">
            <img src={img} className="card-img-top" alt={alt} />
          </div>
          <div className="card-body d-flex align-items-end justify-content-center">
            <h4
              className="card-title text-center"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>
        </div>
        <div
          id={id}
          style={{ display: "none" }}
          dangerouslySetInnerHTML={{ __html: popupContent }}
        />
      </div>
    );
  }
);

export default PortfolioArticleItem;
PortfolioArticleItem.displayName = "PortfolioArticleItem";

export const MPortfolioArticleItem = motion(PortfolioArticleItem);
