import * as React from "react";
import style from "./skills.module.css";
export interface ISkillsProps {}

export default function Skills(props: ISkillsProps) {
  return (
    <section className="container mx-auto h-screen px-12 bg-slate-800">
      <h1 className={`${style.title} text-center font-mono`}>Skills</h1>
      <div className="flex h-full space-x-12 items-center justify-center ">
        <div className="grid grid-cols-4 gap-4 content-evenly  justify-items-center h-[80%] rounded-lg bg-slate-600">
          <div
            className={` col-span-full py-4 w-full text-center bg-sky-800 text-white font-bold`}
          >
            ReactJS
          </div>
          <div className={`${style.skill}  bg-red-800`}>NextJS</div>
          <div className={`${style.skill}  bg-slate-800`}>Typescript</div>
          <div className={`${style.skill}  bg-sky-800`}>Firebase</div>
          <div className={`${style.skill}  bg-sky-800`}>Tailwind</div>
          <div
            className={`w-full py-4 col-span-full bg-sky-800 text-center text-white font-bold`}
          >
            GIT
          </div>
        </div>
        <div className="flex-1 h-[80%] rounded-lg bg-transparent">
          <h1 className="text-2xl text-white">title</h1>
          <p>Explain here...</p>
        </div>
      </div>
    </section>
  );
}
