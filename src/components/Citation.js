import React from 'react';

function Citation (props) {
    return (
        <section className='citation pt-5'>
            <div className='container d-flex justify-content-center mt-0 mt-md-5'>
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