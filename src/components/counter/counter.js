import React, { useState } from 'react';
import './counter.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const reset = () => {
        setCounter(0);
    };

    const add = () => {
        setCounter(counter+1);
    };

    const remove = () => {
        setCounter(counter > 0 ? counter-1 : 0)
    };

    let test =
        counter === 0 ? "grey"
            : counter % 10 === 0 ? "orange"
            : counter % 2 === 0 ? "red"
            : "blue"

    return (
        <div>
            <div className={test + " displayCounter"}><p>{counter}</p></div>
            <div className="buttonContainer">
                <button className="buttons addOne" onClick={ add }><p>Add one more</p></button>
                <button className="buttons removeOne" onClick={ remove }><p>Remove one more</p></button>
                <button className="buttons reset" onClick={ reset }><p>Reset</p></button>
            </div>
        </div>
    );
}

export default Counter;