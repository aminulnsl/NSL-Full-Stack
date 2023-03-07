import { useState } from "react";

const Counter = () => {
    const [counter, setCounter]  = useState(() => Math.floor(Math.random() * 16));

    const incrBy5 = () => {
        console.log('incrBy5');
        // setCounter(counter + 5);
        setCounter((prev) => prev + 5);
    }

    return(
        <div className="counter-box">
            <div>
                <span>{counter}</span>
            </div>
            <button onClick={incrBy5}>+ 5</button>
        </div>
    );
}

export default Counter;