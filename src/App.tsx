import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hero from "./section/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hero />
    </div>
  );
}

export default App;
