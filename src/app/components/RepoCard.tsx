import { BookMarked, Star } from "lucide-react";
import React from "react";

interface Repo {
  url: string;
  name: string;
  language: string;
  stars: number;
}

export default function RepoCard({ url, name, language, stars }: Repo) {
  const languageData = require("../../../public/languages.json");

  return (
    <a
      href={url}
      className="grid h-24 gap-2 p-4 duration-500 border hover:scale-105"
      target="_blank"
      rel="noopener noreferrer"
    >
      <strong className="flex items-center gap-1">
        <BookMarked size={16} />
        {name}
      </strong>
      {language ? (
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center justify-center gap-1">
            <div
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: languageData[language].color,
              }}
            ></div>
            {language}
          </div>
          {stars > 0 ? (
            <div className="flex items-center justify-center gap-1">
              <Star size={16} />
              {stars}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </a>
  );
}
