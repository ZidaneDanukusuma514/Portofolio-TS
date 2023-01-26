import * as React from "react";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="flex h-full items-center justify-evenly">
      <div className="float-left w-[500px] h-[400px]">
        <h1 className="text-4xl font-mono text-white">Hi im Zidane</h1>
        <p className="text-2xl font-mono  text-white/75">
          a Junior Frontend Developer from Indonesia
        </p>
      </div>
      <div className="order-2 w-[500px] h-[400px]">
        <img
          className="bg-local bg-center bg-auto"
          src="https://raw.githubusercontent.com/pmndrs/zustand/main/bear.jpg"
          alt="Zustant_poster"
        />
      </div>
    </div>
  );
}
