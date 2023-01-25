import React from 'react';

function Citation (props) {
    return (
        <section className='citation d-flex justify-content-center align-items-center'>
            <div className='container'>
                <blockquote className="quote w-100 w-md-75 text-custom">
                    <div className="quote-body">Если оптимизировать всё, что можно, то вы будете вечно несчастным.</div>
                    <div className="quote-footer">
                        <cite>Дональд Эрвин Кнут</cite>
                    </div>
                </blockquote>
            </div>
        </section>
        
    )
}

export default Citation;