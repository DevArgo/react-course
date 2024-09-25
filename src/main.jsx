import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Main, {PrimaryButton} from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Main
            name="Max"
            color="yellow"
            onNameClick={() => alert("Ciao!")}
        />
        <Main
            name="Alessia"
            color="green"
            onNameClick={() => alert("Come va?")}
        />
        <PrimaryButton text="Alla prossima" handleClick={() => alert("ci sentiamo!")}/>
    </StrictMode>,
)
