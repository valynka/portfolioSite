import React from 'react';
import GetCourseSlider from './GetCourseSlider';

function GetCourse () {
    
    return (
        <section className="getcourse" id="getcourse">
            <div className="container-xl">
                <h2>GetCourse</h2>
                <div className="row skills">
                <div className="col-md-4 col-12">
                        <ul>
                            <li>Настройка аккаунта, домена, почты</li>
                            <li>Создание и настройка тренингов и уроков</li>
                            <li>Работа с пользователями (импорт, экспорт, выборки, сегменты)</li>
                            <li>Создание сайтов и рассылок</li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-12">
                       <ul>
                        <li>Настройка промоакций и партнерских программ</li>
                        <li>Построение и тестирование процессов</li>
                        <li>Интеграция с Telegram (чат-бот), VK</li>
                        <li>Настройка платежной системы</li>
                    </ul> 
                    </div>
                    <div className="col-md-4 col-12">
                        <ul>
                        <li>Создание продуктов и предложений</li>
                        <li>Аналитика (дашборды, статистика)</li>
                        <li>Трафик (яндекс-метрика, каналы, метки)</li>
                        <li>Организация и проведение вебинаров</li>
                    </ul>
                    </div>                    
                </div>
                <GetCourseSlider />
            </div>
        </section>
    );
}

export default GetCourse;