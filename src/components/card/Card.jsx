import React from 'react';

// Браузер роутер прокидывает историю вперед и назад во все прокинутые через него роуты(маршуты)
// С помощьюроутеров мы можем проходить вперед, назад или на опеределенную страницу.
const Card = (props) => {
    return (
        <div>
            <button onClick={() => props.history.goBack()} className="back_btn">Back</button>
        </div>
    )
};


export default Card;