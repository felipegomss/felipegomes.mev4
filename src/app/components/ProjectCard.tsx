import Image from "next/image";
import React from "react";
import Tag from "./Tag";

interface Project {
  name: string;
  url: string;
  img: string;
  type: ProjectType;
}

type ProjectType = "Real Client" | "Study Case" | "Real Project";

export default function ProjectCard({ url, img, type, name }: Project) {
  return (
    <li>
      <a href={url} target="_blank">
        <div className="duration-500 border-2 cursor-pointer hover:rounded-none aspect-video rounded-2xl bg-zinc-950">
          <Image
            src={`/${img}.png`}
            alt={`/${name} webpage`}
            width={500}
            height={500}
          />
        </div>
      </a>
      <div className="grid items-start grid-cols-2 mt-2">
        <h2 className="text-2xl font-bold ">{name}</h2>
        <Tag>{type}</Tag>
      </div>
    </li>
  );
}
