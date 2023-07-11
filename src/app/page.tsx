import { Rocket, Github, Instagram, Linkedin, MoveRight } from "lucide-react";

export default function Home() {
  return (
    <main>
      <div className="border-b-2 fixed w-full bg-white bg-opacity-20 backdrop-blur-lg">
        <nav className="flex justify-between max-w-7xl m-auto items-center py-4">
          <a href="/" className="group">
            <Rocket className="group-hover:animate-rocket-launch group-hover:fill-emerald-500 group-hover:stroke-emerald-500" />
          </a>
          <div className="flex gap-20">
            <div className="flex gap-6">
              <a
                href="https://github.com/felipegomss"
                className="relative p-4 group"
                target="_blank"
              >
                <div className="bg-emerald-500/40 absolute group-hover:w-full group-hover:h-full w-0 h-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full duration-700" />
                <Github />
              </a>
              <a
                href="https://linkedin.com/in/felipegomss"
                className="relative p-4 group"
                target="_blank"
              >
                <div className="bg-emerald-500/40 absolute group-hover:w-full group-hover:h-full w-0 h-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full duration-700" />
                <Linkedin />
              </a>
              <a
                href="https://instagram.com/felipegomss"
                className="relative p-4 group"
                target="_blank"
              >
                <div className="bg-emerald-500/40 absolute group-hover:w-full group-hover:h-full w-0 h-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full duration-700" />
                <Instagram />
              </a>
            </div>
            <a
              href=""
              className="flex gap-2 items-center group font-semibold hover:text-emerald-500 duration-1000"
            >
              Sobre & Projetos
              <span className="group-hover:animate-bounce-right">
                <MoveRight />
              </span>
            </a>
          </div>
        </nav>
      </div>
      <div className="w-full h-screen flex justify-center items-center bg-white">
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
              Criador de Experiências Digitais Vibrantes. 90+ milhões de
              usuários impactados por projetos que transcendem limites. Pronto
              para superar desafios e criar soluções inovadoras?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
