import Image from "next/image";
import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="max-w-7xl m-auto p-8 md:px-0">
      <h1 className="text-5xl font-extrabold my-8">Code Lab</h1>
      <ul className="grid md:grid-cols-3 gap-8">
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
          name="Where in the World?"
          type="Real Project"
          img="witw"
          url="http://countries.felipegomes.me/"
        />
      </ul>
    </div>
  );
}
