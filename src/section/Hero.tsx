import * as React from "react";
import Header from "../component/Header";
import Home from "../component/Home";

export interface IHeroProps {}

export default function Hero(props: IHeroProps) {
  return (
    <section className="h-screen bg-slate-800">
      <Header />
      <Home />
    </section>
  );
}
