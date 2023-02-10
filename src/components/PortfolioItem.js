import { motion } from "framer-motion";
import React, { forwardRef } from "react";

const PortfolioItem = forwardRef(({ img, desc, alt, link }, ref) => (
  <div className="col portfolio-item" ref={ref}>
    <a
      className="card-link text-dark text-decoration-none"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={alt} />
        <div className="card-body d-flex align-items-center">
          <p
            className="card-text small"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>
      </div>
    </a>
  </div>
));

PortfolioItem.displayName = "PortfolioItem";

export const MPortfolioItem = motion(PortfolioItem);

export default PortfolioItem;
