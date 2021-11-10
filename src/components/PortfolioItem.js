import React from "react";

function PortfolioItem (props) {
    const { img, desc, alt, link } = props.data;
    return (
        <div className="col">
            <a className="card-link" href={link} target="_blank" rel="noreferrer">
                <div className="card  h-100">
                    <img src={img} className="card-img-top" alt={alt} />
                    <div className="card-body">
                        <p className="card-text">{desc}</p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default PortfolioItem;