import React, {useState} from "react"

function Counter(){

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count+1);
    }

    const decreaseCount = () => {
        setCount(count-1);
    }

    const resetCount = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <h1 className="count-display">{count}</h1>
            <button className="counter-button" onClick={decreaseCount}>Decrease Count</button>
            <button className="counter-button" onClick={resetCount}>Reset Count</button>
            <button className="counter-button" onClick={increaseCount}>Increase Count</button>
        </div>
    )
}

export default Counter