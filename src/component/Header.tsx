import * as React from "react";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <header className="flex flex-col md:flex-row items-center py-4 bg-slate-800">
      <h1 className="font-bold text-white text-2xl border-r-[1px] px-4">
        Zidane
      </h1>
      <nav className="grow">
        <ul className="flex space-x-4 mx-4">
          <li className="font-bold text-white/75 hover:text-white mx-4">
            Past Work
          </li>
          <li className="font-bold text-white/75 hover:text-white mx-4">
            Skills
          </li>
          <li className="font-bold text-white/75 hover:text-white mx-4">
            Testimonial
          </li>
        </ul>
      </nav>
      <button className="font-bold text-white/75 hover:text-white mx-4">
        Hire Me →
      </button>
    </header>
  );
}
