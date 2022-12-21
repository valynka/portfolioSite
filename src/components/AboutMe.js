import React from "react";
import avatar from "../img/avatar.jpg";

function AboutMe () {
    return (
        <section className="about-me" id="about">
            <div className="container-xl">
                <div className="row align-items-center">
                    <div className="col-sm-8 col-12">
                            <h1>Привет!</h1>
                            <p>Меня зовут Валерия. Я занимаюсь frontend-разработкой, люблю фотографировать и обожаю собак.</p>
                            <p>До того, как прийти в веб я много лет работала редактором, но захотела научиться чему-то еще. Выбор пал сначала на верстку, позже заинтересовал backend. Пробовала учить PHP, был небольшой опыт разработки на Bitrix. Потом прошла короткий курс по SEO, но в итоге больше всего понравились JavaScript и frontend.</p>
                            <p>В 2019 году моя жизнь кардинально изменилась, в ней появился лучший друг по имени Флип. Это чудесный пес породы корги. С тех пор помимо программирования я учусь еще и зоопсихологии. Как ни странно, но это положительно влияет не только на отношения с животными, но и с людьми. Флип научил меня глубже понимать себя и окружающих, быть терпеливее и лучше.</p>
                            <p>Ниже на этой странице можно посмотреть примеры работ и фотографии, среди которых, конечно же, можно увидеть и Флипкины.</p>
                    </div>
                    <div className="col-sm-4 col-12">
                        <img className="avatar-img w-100" src={avatar} alt="avatar" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;