import React from 'react';
import skills from '../data/skills.js';
import SkillsList from './SkillsList.js';
import Portfolio from './Portfolio.js';

function Frontend () {
    return (
        <section className="frontend" id="portfolio">
            <div className="container-xl">
                <h2>Frontend-разработка</h2>
                <div className="row skills">
                    <SkillsList name='Верстка' items={skills.html} />
                    <SkillsList name='JavaScript' items={skills.js} />
                    <SkillsList name='Работа с макетом' items={skills.layout} />
                </div> 
                <Portfolio />               
            </div>            
        </section>
    );
}

export default Frontend;