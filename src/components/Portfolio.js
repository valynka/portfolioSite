import React from 'react';
import portfolio from '../data/portfolio.js';
import PortfolioItem from './PortfolioItem.js';
import _ from 'lodash';

function Portfolio () {
    return (
        <section className="mt-6 pt-6 pb-6" id="portfolio">
		    <div className="container-xl">
			    <h2 className='mb-5 ls-25 h1'>Портфолио</h2>
			    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    {portfolio.map((item) => <PortfolioItem key={_.uniqueId()} data={item }/>)}
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
