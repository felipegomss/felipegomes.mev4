"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Tag from "./Tag";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-8 m-auto max-w-7xl md:px-0">
      <h1 className="my-8 text-5xl font-extrabold">Dev Insights</h1>
      <ul className="grid gap-8">
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
            <li className="py-2 border-b" key={index}>
              <p className="my-2 text-sm text-zinc-600">{formattedDate}</p>
              <a href={article.link} target="_blank">
                <h1 className="text-xl font-black">{article.title}</h1>
                <p dangerouslySetInnerHTML={createMarkup()} />
              </a>
              <div className="flex flex-wrap gap-2 my-4">
                {article.categories.length > 0
                  ? article.categories.map((category, index) => {
                      return (
                        <a
                          href={`https://medium.com/tag/${category}`}
                          key={index}
                          target="_blank"
                        >
                          <Tag>{category}</Tag>
                        </a>
                      );
                    })
                  : ""}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
