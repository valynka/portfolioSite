import React from "react";
import _ from "lodash";
import cn from "classnames";
import Fancybox from "./FancyBox";

function GalleryContent(props) {
  const { type } = props;
  const { tabContent } = props;

  return (
    <div className="tab-content">
      {tabContent.map(({ tabId, content }, index) => {
        const classes = cn("tab-pane", "fade", {
          show: tabId === type,
          active: tabId === type,
        });

        return (
          <div className={classes} key={_.uniqueId()}>
            <div className="row gallery">
              <Fancybox options={{ infinite: false }}>
                {content.map(({ fullImg800, fullImg1920, preview800, alt }) => {
                  return (
                    <div
                      className="col-lg-3 col-md-4 col-6 image"
                      key={_.uniqueId()}
                    >
                      <p
                        data-src={fullImg1920}
                        data-srcset={`${fullImg800} 800w, ${fullImg1920} 1920w`}
                        data-sizes="(max-width: 815px) 800px, 1920px"
                        data-fancybox={`gallery-${index}`}
                      >
                        <img className="img-fluid" src={preview800} alt={alt} />
                      </p>
                    </div>
                  );
                })}
              </Fancybox>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GalleryContent;
