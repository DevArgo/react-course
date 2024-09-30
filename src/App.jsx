import { useState } from "react";

const useCounter = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter(() => counter + 1);

    const reset = () => setCounter(0);

    const decrement = () => setCounter(() => counter - 1);

    return [counter, reset, increment, decrement];
}

const App = ({ name, color = null, onNameClick = () => { } }) => {
    const [counter, , increment] = useCounter();
    return <>
        <h1 onClick={increment}>Benvenuti in ReactJs!</h1>
        <h2>Ciao <span onClick={onNameClick} style={
            {
                color: color ?? "red"
            }
        }>{name}</span>, come va?</h2>
        <h3>{counter}</h3>
    </>;
}

export const PrimaryButton = ({ text, handleClick }) => <button
    onClick={handleClick}
    style={
        {
            "backgroundColor": "blue",
            "borderRadius": "10px",
        }
    }
>{text}</button>

export default App
