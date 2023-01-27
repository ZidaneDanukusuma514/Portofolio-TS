import * as React from "react";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="flex h-full items-center justify-evenly">
      <h1 className="text-4xl font-mono text-white">
        Hi im Zidane
        <br />
        <span className="text-2xl font-mono text-white/75">
          a Junior Frontend Developer from Indonesia
        </span>{" "}
      </h1>

      <img
        className="bg-contain bg-center w-[500px]"
        src="https://raw.githubusercontent.com/pmndrs/zustand/main/bear.jpg"
        alt="Zustant_poster"
      />
    </div>
  );
}
