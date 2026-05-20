import { motion } from "framer-motion";
import React, { forwardRef } from "react";
//import { Fancybox } from "@fancyapps/ui";



const PortfolioArticleItem = forwardRef(({ img, title, alt, link }, ref) => (
  <div className="col article-portfolio-item" ref={ref}>
    <a
      className="card-link text-dark text-decoration-none"
      href={link}
      data-fancybox
      data-type="iframe"
    >
      <div className="card h-100 p-3">
        <div className="card-img">
          <img src={img} className="card-img-top" alt={alt} />
        </div>
        <div className="card-body d-flex align-items-end justify-content-center">
          <h4
            className="card-title text-center"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
      </div>
    </a>
  </div>
));

export default PortfolioArticleItem;
PortfolioArticleItem.displayName = "PortfolioArticleItem";

export const MPortfolioArticleItem = motion(PortfolioArticleItem);
