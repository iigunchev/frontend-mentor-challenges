import { useState, useEffect } from "react";
import './App.css';
import iconDice from "./images/icon-dice.svg";
import desktopDivider from "./images/pattern-divider-desktop.svg";
import mobileDivider from "./images/pattern-divider-mobile.svg";

function App() {

  const [advice, setAdvice] = useState({})
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    const {id, advice} = data.slip;
    setAdvice({advice: advice, id: id})
  }
  useEffect(() => {
    getAdvice();
  }, [])
  
  return (
    <div className="container">
      <article>
        <h3>ADVICE  #{advice.id}</h3>
        <h1>"{advice.advice}"</h1>
        <div className="divider" />
        <button onClick={() => getAdvice()}><img src={iconDice} alt="dice icon"/></button>
      </article>
    </div>
  );
}

export default App;
