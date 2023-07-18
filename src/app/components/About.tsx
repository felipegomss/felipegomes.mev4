"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FileCode2, Loader } from "lucide-react";

export default function About() {
  const [download, setDownload] = useState(false);
  const handleDownload = () => {
    setDownload(true);
    setTimeout(() => {
      setDownload(false);
    }, 1000);
  };
  return (
    <div className="p-8 relative bg-black text-white min-h-screen flex items-center justify-center">
      <main className=" z-40 max-w-7xl m-auto flex flex-col-reverse md:flex-row gap-16">
        <article className="flex flex-col gap-8 justify-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-purple-400 from-emerald-500">
            Felipe Gomes
          </h1>
          <p className="text-zinc-400">
            Olá! Sou uma pessoa apaixonada, com um profundo amor pela música,
            tecnologia, jogos e futebol. Como desenvolvedor de front-end,
            aprimorei minhas habilidades ao longo de 4 anos, especializando-me
            em criar interfaces de usuário responsivas e interativas. Me destaco
            em projetos desafiadores que exigem solução de problemas e criação
            de soluções inovadoras.
            <br />
            Durante minha trajetória profissional, tive o privilégio de
            trabalhar em projetos impactantes que alcançaram mais de 90 milhões
            de usuários. Essa experiência me proporcionou o desenvolvimento da
            capacidade de atuar sob pressão e me destacar na gestão de projetos.
            A colaboração com equipes diversas e multidisciplinares em ambientes
            exigentes também enriqueceu minha experiência profissional.
            <br />
            Estou sempre entusiasmado para abraçar novas oportunidades e
            enfrentar desafios emocionantes. Acredito na importância da
            aprendizagem contínua e em acompanhar as últimas tendências
            tecnológicas. Por isso, estou sempre buscando atualizar minhas
            habilidades para entregar o melhor trabalho possível.
            <br />
            Fique à vontade para entrar em contato comigo em português ou
            inglês. Estou disponível para colaborações, novos projetos ou mesmo
            para uma conversa sobre nossas paixões em comum.
            <br />
            Vamos criar algo incrível juntos!
          </p>
          <a
            href="./Curriculo - Felipe Gomes.pdf"
            className={` group relative flex gap-4 justify-center items-center py-4 px-8 border-2 border-white my-10 rounded-2xl cursor-pointer`}
            download
            onClick={handleDownload}
          >
            <h2
              className={`md:text-3xl text-xl font-extrabold flex gap-4 items-center`}
            >
              Baixe meu curriculo
              {!download ? (
                <FileCode2
                  size={32}
                  className="opacity-0 group-hover:opacity-100 duration-500 animate-bounce-right"
                />
              ) : (
                <Loader size={32} className="animate-spin ease-out" />
              )}
            </h2>
          </a>
        </article>

        <Image
          src="https://instagram.fssa2-1.fna.fbcdn.net/v/t51.2885-15/319136153_178711961475536_7639894736774846049_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fssa2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=RIqf6KYlYdIAX8pQ5Ux&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk5MDM0NzcwMzUyODgwNTA3OA%3D%3D.2-ccb7-5&oh=00_AfCWM98W12MmkC-ZgCs_5H-Ges11cSfUN5Q_AqtjfrMqJg&oe=64B24BF8&_nc_sid=fc8dfb"
          alt=""
          width={500}
          height={500}
        />
      </main>
    </div>
  );
}
