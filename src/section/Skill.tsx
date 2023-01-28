import * as React from "react";

export interface ISkillsProps {}

export default function Skills(props: ISkillsProps) {
  return (
    <section className="container mx-auto h-screen px-12 bg-slate-800">
      <h1 className="text-center font-mono text-3xl">Skills</h1>
      <div className="flex h-full space-x-12 items-center justify-center ">
        <div className="grid grid-cols-4 gap-2 content-around justify-items-center flex-1 h-[80%] rounded-lg bg-slate-600">
          <div className="bg-red-500 p-4">ReactJS</div>
          <div className="bg-zinc-800 p-4">NextJS</div>
          <div className="bg-sky-800 p-4">Typescript</div>
          <div className="bg-yellow-500 p-4">Firebase</div>
          <div className="bg-red-500 p-4">ReactJS</div>
          <div className="bg-zinc-800 p-4">NextJS</div>
          <div className="bg-sky-800 p-4">Typescript</div>
          <div className="bg-yellow-500 p-4">Firebase</div>
          <div className="bg-red-500 p-4">ReactJS</div>
          <div className="bg-zinc-800 p-4">NextJS</div>
          <div className="bg-sky-800 p-4">Typescript</div>
          <div className="bg-yellow-500 p-4">Firebase</div>
        </div>
        <div className="flex-1 h-[80%] rounded-lg bg-transparent">
          <h1 className="text-lg ">title</h1>
          <p>Explain here...</p>
        </div>
      </div>
    </section>
  );
}
