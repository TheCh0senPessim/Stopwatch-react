import React from 'react';

const Button = (props) => {
    return (
        <div>
            {(props.status === 0)?
                (<button onClick={props.start} className="stopwatch-btn stopwatch-btn-gre">Старт</button>) : ``
            }

            {(props.status === 1)?
                (<div>
                    <button onClick={props.stop} className="stopwatch-btn stopwatch-btn-red">Стоп</button>
                    <button onClick={props.reset} className="stopwatch-btn stopwatch-btn-yel">Сбросить</button>
                </div>) : ``
            }

            {(props.status === 2)?
                (<div>
                    <button onClick={props.resume} className="stopwatch-btn stopwatch-btn-gre">Продолжить</button>
                    <button onClick={props.reset} className="stopwatch-btn stopwatch-btn-yel">Сбросить</button>
                </div>) : ``
            }

        </div>
    );
}

export default Button;
