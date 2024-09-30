import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import Main, { PrimaryButton } from './App.jsx'

let timerId = null;

const CountdonwApp = () => {

    const [countdown, setCountdown] = useState(10);
    const [countdown2, setCountdown2] = useState(10);

    return <>
        <div onClick={() => setCountdown(() => countdown - 1)}>
            <div>{countdown}</div>
            {
                countdown > 0 ? <Main
                    name="Max"
                    color="yellow"
                    onNameClick={() => alert("Ciao!")}
                /> : null
            }
        </div>
        <p onClick={() => setCountdown2(() => countdown2-1)}>{countdown2}</p>
        <Main
            name="Alessia"
            color="green"
            onNameClick={() => alert("Come va?")}
        />
        <PrimaryButton text="Alla prossima" handleClick={() => alert("ci sentiamo!")} />

    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CountdonwApp />
    </StrictMode>,
)
