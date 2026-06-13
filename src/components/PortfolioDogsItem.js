import { motion } from "framer-motion";
import React, { forwardRef } from "react";
import { Fancybox } from "@fancyapps/ui";

const PortfolioDogsItem = forwardRef(
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
        className="col article-portfolio-item mt-md-0"
        ref={ref}
        role="button"
        tabIndex={0}
        onClick={openPopup}
        onKeyDown={handleKeyDown}
        style={{ cursor: "pointer", outline: "none" }}
      >
        <div className="card text-bg-dark">
          <img src={img} className="card-img" alt={alt} />
          <div className="card-img-overlay">
            <h3
              className="card-title text-center title-shadow"
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

export default PortfolioDogsItem;
PortfolioDogsItem.displayName = "PortfolioDogsItem";

export const MPortfolioDogsItem = motion(PortfolioDogsItem);
