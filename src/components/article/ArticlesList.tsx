import React, { useState, useEffect } from "react";
import { fetchArticles } from "../../utils/api";
import { Article } from "../../types/types";
import ArticleCard from "./ArticleCard";

type ArticlesListProps = {
  apiUrl?: string;
};

const ArticlesList: React.FC<ArticlesListProps> = ({ apiUrl }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data);
        if (data.length > 0) {
          setSelectedArticle(data[0]);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) {
    return <p>Loading articles...</p>;
  }

  if (articles.length === 0) {
    return <p>No articles available.</p>;
  }

  return (
    <div className="flex flex-col md:flex-row h-screen relative">
      <div
        className={`absolute md:relative w-full md:w-[20%] pb-4 border-2 border-gray-300 rounded-b-md md:border-0 bg-gray-100 p-4 z-50  ${
          isSidebarOpen ? "block" : "hidden md:block"
        }`}
      >
        <div className="flex justify-between items-center md:mb-4">
          <h2 className="text-xl font-bold text-gray-800 hidden md:block">
            Articles
          </h2>
          <button
            className="md:hidden p-1 text-gray-600 hover:text-gray-800 absolute right-2 top-2"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✕
          </button>
        </div>
        <div className="max-h-[300px] md:max-h-full overflow-y-auto mt-10">
          <ul>
            {articles.map((article, index) => (
              <li
                key={index}
                className={`p-2 hover:bg-gray-200 cursor-pointer rounded-lg transition-colors duration-200 ${
                  selectedArticle?.title === article.title ? "bg-gray-200" : ""
                }`}
                onClick={() => {
                  setSelectedArticle(article);
                  setIsSidebarOpen(false);
                }}
              >
                <h3 className="text-md font-semibold text-gray-700">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {new Date(article.date).toDateString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="md:w-[80%] flex-grow p-6 overflow-y-auto">
        <button
          className="md:hidden p-2 mb-4 text-gray-600 hover:text-gray-800"
          onClick={() => setIsSidebarOpen(true)}
        >
          ☰ Open Article List
        </button>

        {selectedArticle ? (
          <ArticleCard article={selectedArticle} />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Select an article to view details.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesList;
