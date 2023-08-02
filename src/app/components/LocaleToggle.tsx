import React from "react";
import Link from "next-intl/link";

export default function LocaleToggle() {
  return (
    <div className="fixed border-4 flex flex-col md:flex-row border-white drop-shadow-xl right-6 md:right-10 bottom-8 bg-black rounded-full z-50 cursor-pointer divide-y-4 md:divide-x-4 md:divide-y-0">
      <Link
        href={"/"}
        locale={"pt-BR"}
        className="w-10 h-10 flex items-center justify-center text-white"
      >
        🇧🇷
      </Link>
      <Link
        href={"/"}
        locale={"en"}
        className="w-10 h-10 flex items-center justify-center text-white"
      >
        🇺🇸
      </Link>
    </div>
  );
}
