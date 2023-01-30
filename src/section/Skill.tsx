import * as React from "react";
import style from "./skills.module.css";
export interface ISkillsProps {}

export default function Skills(props: ISkillsProps) {
  return (
    <section className="container mx-auto h-screen px-12 bg-slate-800">
      <h1 className={`${style.title} text-center font-mono`}>Skills</h1>
      <div className="flex h-full space-x-12 items-center justify-center ">
        <div className="grid grid-cols-4 content-evenly justify-items-center flex-1 h-[80%] rounded-lg bg-slate-600">
          <div className={`${style["skill-box"]}  bg-sky-800`}>ReactJS</div>
          <div className={`${style["skill-box"]}  bg-sky-800`}>NextJS</div>
          <div className={`${style["skill-box"]}  bg-sky-800`}>Typescript</div>
          <div className={`${style["skill-box"]}  bg-sky-800`}>Firebase</div>
          <div className={`${style["skill-box"]}  bg-sky-800`}>Tailwind</div>
          <div className={`${style["skill-box"]}  bg-sky-800`}>GIT</div>
        </div>
        <div className="flex-1 h-[80%] rounded-lg bg-transparent">
          <h1 className="text-lg text-white">title</h1>
          <p>Explain here...</p>
        </div>
      </div>
    </section>
  );
}
