import Image from "next/image";
import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="p-8 m-auto max-w-7xl md:px-0">
      <h1 className="my-8 text-5xl font-extrabold">Code Lab</h1>
      <ul className="grid gap-8 md:grid-cols-3">
        <ProjectCard
          name="Jacoseg"
          type="Real Client"
          img="jacoseg"
          url="https://www.jacoseg.com.br/"
        />
        <ProjectCard
          name="HooBank"
          type="Study Case"
          img="hoobank"
          url="https://hoobank-rho-plum.vercel.app/"
        />
        <ProjectCard
          name="StreamJuice"
          type="Real Project"
          img="streamjuice"
          url="https://streamjuice.felipegomes.me/#/"
        />
        <ProjectCard
          name="GPT3 Orcin"
          type="Study Case"
          img="gpt3"
          url="https://gpt3-orcin.vercel.app/"
        />
        <ProjectCard
          name="Spotify Clone"
          type="Study Case"
          img="spotify"
          url="https://spotify-clone-seven-orpin.vercel.app/"
        />
        <ProjectCard
          name="WITW?"
          type="Real Project"
          img="witw"
          url="http://countries.felipegomes.me/"
        />
      </ul>
    </div>
  );
}
