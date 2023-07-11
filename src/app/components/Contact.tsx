"use client";

import React, { useRef, useState } from "react";
import { Mailbox } from "lucide-react";

export default function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const emailRef = useRef<any>(null);

  const handleEmailCopy = () => {
    const email = emailRef.current.textContent;
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <Mailbox size={150} />
      <h1 className="font-extrabold md:text-5xl text-3xl">Me mande um email</h1>
      <div
        onClick={handleEmailCopy}
        className={`${
          emailCopied ? "bg-emerald-500" : ""
        } group relative flex gap-4 justify-center items-center py-4 px-8 border-8 border-black my-10 rounded-2xl shadow-neobrutalism cursor-pointer`}
      >
        <h2
          className={`${
            emailCopied ? "text-white" : ""
          } md:text-3xl text-xl font-extrabold`}
          ref={emailRef}
        >
          {emailCopied ? "Email copiado 🫱🏽‍🫲🏽" : "contato@felipegomes.me"}
        </h2>
      </div>
    </div>
  );
}
