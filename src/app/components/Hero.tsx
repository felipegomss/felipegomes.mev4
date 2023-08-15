import React from "react";
import { ArrowDown } from "lucide-react";

export default function Hero({ title, paragraph, greeting }: any) {
  return (
    // <div className="relative w-full h-screen flex justify-center items-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200">
    <div className="relative flex items-center justify-center w-full h-screen bg-fixed bg-dotted">
      <div className="z-10 uppercase w-min">
        <h2 className="flex font-black text-zinc-700 md:text-xl">
          {greeting} <span className="animate-waving-hand">👋🏽</span>
          {title} Felipe Gomes
        </h2>
        <h1 className="text-5xl font-black leading-none md:text-9xl">
          react
          <br />
          developer
        </h1>
        <div className="flex md:justify-end">
          <p className="text-sm font-extrabold text-right md:w-2/3 text-zinc-700">
            {paragraph}
          </p>
        </div>
      </div>
      <div className="absolute -translate-y-1/2 bottom-36 left-1/2 animate-bounce">
        <ArrowDown />
      </div>
    </div>
  );
}
