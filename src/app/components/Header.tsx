"use client";

import React from "react";
import { Rocket, Github, Instagram, Linkedin, MoveRight } from "lucide-react";
import Link from "next/link";

export default function Header({ title }: any) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed z-50 w-full bg-white border-b-4 border-black bg-opacity-20 backdrop-blur-lg">
      <nav className="flex items-center justify-between py-4 m-auto max-w-7xl">
        <a href="/" className="hidden group md:flex">
          <Rocket className="group-hover:animate-rocket-launch group-hover:fill-emerald-200 group-hover:stroke-emerald-200" />
        </a>
        <div className="flex gap-6 md:gap-20">
          <div className="flex gap-6">
            <a
              href="https://github.com/felipegomss"
              className="relative p-4 group"
              target="_blank"
            >
              <div className="absolute w-0 h-0 duration-700 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/40 group-hover:w-full group-hover:h-full top-1/2 left-1/2" />
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/felipegomss"
              className="relative p-4 group"
              target="_blank"
            >
              <div className="absolute w-0 h-0 duration-700 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/40 group-hover:w-full group-hover:h-full top-1/2 left-1/2" />
              <Linkedin />
            </a>
            <a
              href="https://instagram.com/felipegomss"
              className="relative p-4 group"
              target="_blank"
            >
              <div className="absolute w-0 h-0 duration-700 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/40 group-hover:w-full group-hover:h-full top-1/2 left-1/2" />
              <Instagram />
            </a>
          </div>
          <Link
            href={"#about"}
            onClick={handleScroll}
            className="flex items-center gap-2 font-semibold duration-1000 group hover:text-emerald-200"
          >
            {title}
            <span className="p-4 group-hover:animate-bounce-right">
              <MoveRight />
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
