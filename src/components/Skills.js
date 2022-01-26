import React from 'react';
import skills from '../data/skills.js';
import SkillsList from './SkillsList.js';
import educationList from '../data/educationList.js';
import Education from './Education.js';

function Skills () {
    return (
        <section className="skills" id="skills">
            <div className="container-xl">
                <h2>Навыки и образование</h2>
                <div className="row">
                    <SkillsList name='Верстка' items={skills.html} />
                    <SkillsList name='JavaScript' items={skills.js} />
                    <SkillsList name='Работа с макетом' items={skills.layout} />
                </div>
                <Education edList={educationList} />
            </div>
        </section>
    );
}

export default Skills;