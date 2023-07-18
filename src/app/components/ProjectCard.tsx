import Image from "next/image";
import React from "react";

interface Project {
  name: string;
  url: string;
  img: string;
  type: ProjectType;
}

type ProjectType = "Cliente Real" | "Estudo de Caso" | "Projeto Real";

export default function ProjectCard({ url, img, type, name }: Project) {
  return (
    <div>
      <a href={url} target="_blank">
        <div className="aspect-video rounded-xl border-2 cursor-pointer bg-zinc-950">
          <Image
            src={`/${img}.png`}
            alt="jacoseg webpge"
            width={500}
            height={500}
          />
        </div>
      </a>
      <div className="grid grid-cols-2 mt-2">
        <h2 className="text-2xl font-bold ">{name}</h2>
        <div className="flex items-center place-content-end">
          <span className="rounded-xl bg-zinc-300 text-zinc-950 p-1 px-2 text-xs">
            {type}
          </span>
        </div>
      </div>
    </div>
  );
}
