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
    <div className="fixed w-full z-50 border-b-4 border-black bg-white bg-opacity-20 backdrop-blur-lg">
      <nav className="flex justify-between max-w-7xl m-auto items-center py-4">
        <a href="/" className="group md:flex hidden">
          <Rocket className="group-hover:animate-rocket-launch group-hover:fill-emerald-200 group-hover:stroke-emerald-200" />
        </a>
        <div className="flex md:gap-20 gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/felipegomss"
              className="relative p-4 group"
              target="_blank"
            >
              <div className="bg-emerald-200/40 absolute group-hover:w-full group-hover:h-full w-0 h-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full duration-700" />
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/felipegomss"
              className="relative p-4 group"
              target="_blank"
            >
              <div className="bg-emerald-200/40 absolute group-hover:w-full group-hover:h-full w-0 h-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full duration-700" />
              <Linkedin />
            </a>
            <a
              href="https://instagram.com/felipegomss"
              className="relative p-4 group"
              target="_blank"
            >
              <div className="bg-emerald-200/40 absolute group-hover:w-full group-hover:h-full w-0 h-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full duration-700" />
              <Instagram />
            </a>
          </div>
          <Link
            href={"#about"}
            onClick={handleScroll}
            className="flex gap-2 items-center group font-semibold hover:text-emerald-200 duration-1000"
          >
            {title}
            <span className="group-hover:animate-bounce-right p-4">
              <MoveRight />
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
