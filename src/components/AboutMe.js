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
                            <p>Меня зовут <b>Валерия Красных</b>. Я являюсь сертифицированным специалистом по настройке и администрированию платформы <b>GetCourse</b>.</p>
                            <p>Также я владею знаниями <b>HTML5, CSS3 и JavaScript</b>. Увлекаюсь фотографией и кинологией.</p>
                            <p>Ниже вы увидите примеры работ на GetCourse и во Frontend и фотогалерею, в которой целый альбом посвящен моему корги по имени Флип.</p>
                            <p><b>Этот сайт</b> я тоже полностью написала сама, используя <b>React</b> и стили <b>Bootstrap</b>.</p>
                            <Education edList={educationList} />
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default AboutMe;