import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./section/Hero";
import Skills from "./section/Skill";
import Projects from "./section/Projects";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios("https://catfact.ninja/fact")
      .then((res) => {
        console.log("Data: ", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-slate-800">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
