const App = ({ name, color = null, onNameClick = () => { } }) => {
    return <>
        <h1>Benvenuti in ReactJs!</h1>
        <h2>Ciao <span onClick={onNameClick} style={
            {
                color: color ?? "red"
            }
        }>{name}</span>, come va?</h2>
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
