import * as React from "react";

export interface ISkillsProps {}

export default function Skills(props: ISkillsProps) {
  return (
    <section className="container mx-auto flex space-x-12 items-center h-screen px-12 justify-center bg-slate-800">
      <div className="grid grid-cols-4 gap-2 content-around justify-items-center flex-1 h-[80%] rounded-lg bg-slate-600">
        <div>ReactJS</div>
        <div>NextJS</div>
        <div>Typescript</div>
        <div>Firebase</div>
        <div>ReactJS</div>
        <div>NextJS</div>
        <div>Typescript</div>
        <div>Firebase</div>
        <div>ReactJS</div>
        <div>NextJS</div>
        <div>Typescript</div>
        <div>Firebase</div>
      </div>
      <div className="flex-1 h-[80%] rounded-lg bg-transparent">
        <h1>title</h1>
        <p>Explain here...</p>
      </div>
    </section>
  );
}
