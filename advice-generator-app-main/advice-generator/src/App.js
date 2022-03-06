import './App.css';
import iconDice from "./images/icon-dice.svg";
import desktopDivider from "./images/pattern-divider-desktop.svg";

function App() {
  return (
    <div className="container">
      <article>
        <h3>ADVICE  # 117</h3>
        <h1>"It's easy to sit up and take notice, what's difficult is getting up and taking action."</h1>
        <img src={desktopDivider} alt="divider" className="divider"/>
        <button><img src={iconDice} alt="dice icon"/></button>
      </article>
    </div>
  );
}

export default App;
