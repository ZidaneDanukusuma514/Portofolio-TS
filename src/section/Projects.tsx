import * as React from "react";

export interface IProjectsProps {}

export default function Projects(props: IProjectsProps) {
  return (
    <section className="flex items-start h-screen bg-slate-800">
      <div className="w-[80%] mx-auto">
        <h1 className="text-2xl py-12 uppercase text-center font-mono">
          Projects
        </h1>
        <div className="grid grid-cols-2 gap-4 p-12 bg-slate-600">
          <div className="bg-red-500 p-4">ReactJS</div>
          <div className="bg-zinc-800 p-4">NextJS</div>
          <div className="bg-sky-800 p-4">Typescript</div>
          <div className="bg-yellow-500 p-4">Firebase</div>
        </div>
      </div>
    </section>
  );
}
