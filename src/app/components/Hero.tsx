import React from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-white">
      <div className="w-min uppercase">
        <h2 className="flex font-black text-zinc-700 md:text-xl">
          Oi <span className="animate-waving-hand">👋🏽</span>
          eu sou o felipe
        </h2>
        <h1 className="font-black leading-none md:text-9xl text-5xl">
          react
          <br />
          developer
        </h1>
        <div className="flex md:justify-end">
          <p className="md:w-2/3 text-right font-extrabold text-zinc-700 text-sm">
            Criador de Experiências Digitais Vibrantes. 90+ milhões de usuários
            impactados por projetos que transcendem limites. Pronto para superar
            desafios e criar soluções inovadoras?
          </p>
        </div>
      </div>
      <div className="absolute bottom-36 left-1/2 -translate-y-1/2 animate-bounce">
        <ArrowDown />
      </div>
    </div>
  );
}
