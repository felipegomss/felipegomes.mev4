"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FileCode2, Loader } from "lucide-react";

export default function About({ paragraph, button }: any) {
  const [download, setDownload] = useState(false);
  const handleDownload = () => {
    setDownload(true);
    setTimeout(() => {
      setDownload(false);
    }, 1000);
  };

  return (
    <div
      id="about"
      className="relative flex items-center justify-center min-h-screen p-8 text-white bg-black"
    >
      <main className="z-40 flex flex-col-reverse gap-16 m-auto max-w-7xl md:flex-row">
        <article className="flex flex-col justify-center gap-8">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200">
            Felipe Gomes
          </h1>
          <p className="text-zinc-400">{paragraph}</p>
          <a
            href="./Curriculo - Felipe Gomes.pdf"
            className={` group relative flex gap-4 justify-center items-center py-4 px-8 border-2 border-white my-10 rounded-2xl cursor-pointer`}
            download
            onClick={handleDownload}
          >
            <h2
              className={`md:text-3xl text-xl font-extrabold flex gap-4 items-center`}
            >
              {button}
              {!download ? (
                <FileCode2
                  size={32}
                  className="duration-500 opacity-0 group-hover:opacity-100 animate-bounce-right"
                />
              ) : (
                <Loader size={32} className="ease-out animate-spin" />
              )}
            </h2>
          </a>
        </article>
        <Image src="/felipephoto.webp" alt="" width={500} height={500} />
      </main>
    </div>
  );
}
