import React from "react";
import gcImages from "../data/gcImages";
import _ from 'lodash';

function GetCourseSlider () {
    return (
        <div>
            <h4 className="subtitle">Примеры работ</h4>
            <a data-fancybox="gallery-a" href={gcImages[0].img} data-caption={gcImages[0].title}>
                <img className="rounded gc-preview" src={gcImages[0].img} alt={gcImages[0].alt} />
            </a>
            <div style={{display:'none'}}>
                {gcImages.filter(({preview}) => preview !== true).map(({img, alt, title}, index) => {                    
                    return (
                        <a data-fancybox="gallery-a" href={img} data-caption={title} key={_.uniqueId()}>
                            <img className="rounded" src={img} alt={alt} />
                        </a>
                    )                    
                })}
            </div>
        </div>
    );
}

export default GetCourseSlider;