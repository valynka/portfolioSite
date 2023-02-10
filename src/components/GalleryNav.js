import { motion } from "framer-motion";
import React, { forwardRef } from "react";
import _ from "lodash";
import cn from "classnames";

const GalleryNav = forwardRef(({ type, tabs, changeTypeHandler }, ref) => (
  <ul className="nav nav-tabs gallery-tabs mb-4" ref={ref}>
    {tabs.map(({ tabId, name }) => {
      const classes = cn("nav-link", "text-custom-hover", {
        active: tabId === type,
      });
      return (
        <li className="nav-item" key={_.uniqueId()}>
          <motion.button
            layout
            style={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ type: "tween", delay: 0.1, duration: 0.2 }}
            className={classes}
            id={tabId}
            onClick={changeTypeHandler(tabId)}
          >
            {name}
          </motion.button>
        </li>
      );
    })}
  </ul>
));

GalleryNav.displayName = "GalleryNav";

export const MGalleryNav = motion(GalleryNav);

export default GalleryNav;
