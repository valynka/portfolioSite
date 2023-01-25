import React from "react";

function PortfolioItem (props) {
    const { img, desc, alt, link } = props.data;
    return (
        <div className="col portfolio-item">
            <a className="card-link text-dark text-decoration-none" href={link} target="_blank" rel="noopener noreferrer">
                <div className="card bg-light h-100">
                    <img src={img} className="card-img-top" alt={alt} />
                    <div className="card-body d-flex align-items-center">
                        <p className="card-text small" dangerouslySetInnerHTML={{ __html: desc}}/>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default PortfolioItem;