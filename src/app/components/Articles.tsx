"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

interface ListArticles {
  title: string;
  categories: [string];
  content: string;
  link: string;
  pubDate: string;
}

export default function Articles() {
  const [articles, setArticles] = useState<ListArticles[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      const options = {
        method: "GET",
        url: "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@felipegomss",
      };

      try {
        const response = await axios.request(options);
        setArticles(response.data.items);
      } catch (error) {
        console.error(error);
      }
    }

    fetchArticles();
    console.log(articles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-7xl m-auto p-8">
      <h1 className="text-5xl font-extrabold my-8">Dev Insights</h1>
      <div className="grid gap-8">
        {articles.map((article, index) => {
          const extractFirstParagraph = (content: string) => {
            const contentWithoutImages = content.replace(
              /<\/?(img|figure)(.*?)>/gi,
              ""
            );
            const paragraphs = contentWithoutImages.split("</p>");
            const firstParagraph = paragraphs[0];
            const truncatedParagraph = firstParagraph.substring(0, 200) + "...";
            return `${truncatedParagraph}</p>`;
          };
          const firstParagraph = extractFirstParagraph(article.content);

          const createMarkup = () => {
            return { __html: firstParagraph };
          };

          const formatDate = (pubDate: string): string => {
            // Criar um objeto Date a partir da string da data
            const date = new Date(pubDate);

            // Array com os nomes dos meses em português
            const months = [
              "Janeiro",
              "Fevereiro",
              "Março",
              "Abril",
              "Maio",
              "Junho",
              "Julho",
              "Agosto",
              "Setembro",
              "Outubro",
              "Novembro",
              "Dezembro",
            ];

            // Obter o mês e o dia da data
            const month = months[date.getMonth()];
            const day = date.getDate();

            // Formatar a data no formato "Nome_do_Mês Dia"
            const formattedDate = `${month} ${day.toString().padStart(2, "0")}`;

            return formattedDate;
          };

          const formattedDate = formatDate(article.pubDate);
          return (
            <a
              href={article.link}
              className="border-b py-2"
              key={index}
              target="_blank"
            >
              <p className="text-zinc-600 text-sm my-2">{formattedDate}</p>
              <h1 className="text-xl font-black">{article.title}</h1>
              <p dangerouslySetInnerHTML={createMarkup()} />
              <div className="my-4 flex gap-2">
                {article.categories.length > 0
                  ? article.categories.map((category, index) => {
                      return (
                        <span
                          className="rounded bg-zinc-300 text-zinc-400 p-1 text-xs"
                          key={index}
                        >
                          {category}
                        </span>
                      );
                    })
                  : ""}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
