import React from "react";
import { Article } from "../../types/types";
import MinimalChart from "./MinimalChart";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="w-full md:w-[80%] border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800">{article.title}</h2>
      <h3 className="text-md text-gray-600 mt-2">{article.subTitle}</h3>
      <p className="text-sm text-gray-500 mt-1">
        Published on {new Date(article.date).toDateString()}
      </p>
      <a
        href={article.url}
        className="mt-4 inline-block text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More
      </a>
      <p className="mt-2 text-gray-700">{article.description}</p>

      <MinimalChart chartData={article.chart} />
    </div>
  );
};

export default ArticleCard;
