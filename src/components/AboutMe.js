import React from "react";
import avatar from "../img/ava-site.jpg";
import Education from './Education';
import educationList from '../data/educationList.js'

function AboutMe () {
    return (
        <section className="about-me" id="about">
            <div className="container-xl">
                <div className="row">
                    
                    <div className="col-md-4 col-12">
                        <img className="avatar-img" src={avatar} alt="avatar" />
                    </div>
                    <div className="col-md-8 col-12 about-me-text">
                            <h1>Привет!</h1>
                            <p>Меня зовут <b>Валерия Красных</b>. Я занимаюсь <b>HTML-версткой</b> и <b>frontend-разработкой</b>, а также являюсь специалистом по настройке и администрированию платформы <b>GetCourse</b>.</p>
                            <p>По образованию я редактор, а еще увлекаюсь фотографией и кинологией.</p>
                            <p>Ниже есть примеры сверстанных мной страниц, небольшие компоненты, написанные на JavaScript, а также работы на GetCourse.</p>
                            <p><b>Этот сайт</b> я тоже полностью написала сама, используя <b>React</b> и <b>Bootstrap</b>. Код есть на <a className='text-link' href='https://github.com/valynka/portfolioSite' target="_blank" rel="noopener noreferrer">GitHub.</a></p>
                            <p>И, конечно, не могла не выложить здесь фотогалерею, в которой целый альбом посвящен моему корги по имени Флип.</p>
                            <Education edList={educationList} />
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default AboutMe;