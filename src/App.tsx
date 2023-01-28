import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hero from "./section/Hero";
import Skills from "./section/Skill";
import Projects from "./section/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-800">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
