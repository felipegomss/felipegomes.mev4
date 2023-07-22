"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Tag from "./Tag";

interface Repository {
  id: number;
  name: string;
  html_url: string;
  language: string;
}

export default function Repos() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const loadMoreRepositories = async () => {
      try {
        const response = await axios.get<Repository[]>(
          `https://api.github.com/users/felipegomss/repos?page=${page}&per_page=12&sort=updated`
        );
        const newRepositories = response.data;
        setRepositories((prevRepositories) => [
          ...prevRepositories,
          ...newRepositories,
        ]);
      } catch (error) {
        console.error("Erro ao carregar os repositórios:", error);
      }
    };

    loadMoreRepositories();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="max-w-7xl m-auto p-8 md:px-0">
      <h1 className="text-5xl font-extrabold my-8">Code Expedition</h1>
      <ul className="grid md:grid-cols-4 gap-8">
        {repositories.map((repo) => (
          <li key={repo.id}>
            <a
              href={repo.html_url}
              className="grid gap-2 h-24 border p-4 hover:scale-105 duration-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>{repo.name}</strong>
              {repo.language ? <Tag>{repo.language}</Tag> : ""}
            </a>
          </li>
        ))}
      </ul>
      <div className="w-full">
        <button onClick={handleLoadMore} className="m-auto ">
          Carregar Mais
        </button>
      </div>
    </div>
  );
}
