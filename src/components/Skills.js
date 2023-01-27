import React from 'react';
import educationList from '../data/educationList.js';
import pug from '../img/tools/pug.png';
import html from '../img/tools/html.png';
import css from '../img/tools/css.png';
import js from '../img/tools/js.png';
import sass from '../img/tools/sass.png';
import bootstrap from '../img/tools/bootstrap.png';
import gulp from '../img/tools/gulp.png';
import react from '../img/tools/react.png';

function Skills () {
    return (
        <section className="mt-6 pt-6 pb-6" id="skills">
            <div className="container-xl">
                <h2 className='mb-5 ls-25 h1'>Навыки и образование</h2>
                <div className="row mb-4">
                    <div className='col-12 col-md-6'>
                        <p>Создаю красивые и удобные для пользователя страницы. Придерживаюсь принципов кроссбраузерности, валидности и хорошей архитектуры кода.</p>
                        <p>Применяю такие подходы как <b>OOCSS</b> и <b>Atomic CSS</b>. В работе использую <b>React</b>, <b>Pug</b>, <b>SCSS</b>, <b>Bootstrap</b> (создаю собственные утилиты и компоненты).</p>
                        <p>Владею техниками верстки на Flexbox и Grid, создаю различные анимации с помощью CSS и JS.</p>
                        <p>Работаю в командной строке linux, использую <b>make</b> и <b>gulp</b>.</p>
                    </div>
                    <div className='tools-container col-12 col-md-6 position-relative'>
                        <img className='tool-img pug-img' src={pug} alt='Pug js' />
                        <img className='tool-img html-img' src={html} alt='HTML' />
                        <img className='tool-img css-img' src={css} alt='CSS' />
                        <img className='tool-img js-img' src={js} alt='JS' />
                        <img className='tool-img sass-img' src={sass} alt='Sass' />
                        <img className='tool-img bootstrap-img' src={bootstrap} alt='Bootstrap' />
                        <img className='tool-img gulp-img' src={gulp} alt='Gulp' />
                        <img className='tool-img react-img' src={react} alt='React' />
                    </div>                
                </div>
                <div className='row mt-4'>
                    <div className='col'>
                        <p>По первому образованию я редактор. В 2009 году закончила Московский Государсвенный Университет Печати, факультет издательского дела и журналистики.</p>
                        <p>Потом училась на различных <b>курсах</b>:</p>
                        <ul className='courses'>
                            {educationList.map((course) =>
                                <li><span className='fs-5'>{course.institution}</span>
                                    <p>{course.title}</p>
                                    <p>{course.period}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;