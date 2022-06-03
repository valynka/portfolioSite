import React from 'react';
import portfolio from '../data/portfolio.js';
import PortfolioItem from './PortfolioItem.js';
import _ from 'lodash';

function Portfolio () {
    return (        
        <div>
            <h4 className='subtitle'>Примеры работ</h4>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {portfolio.map((item) => <PortfolioItem key={_.uniqueId()} data={item }/>)}
            </div>
        </div>    
    );
}

export default Portfolio;
