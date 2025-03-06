import mockData from "../data/mockData";

export const fetchArticles = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData); 
    }, 500); 
  });
};

export const fetchArticleById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const article = mockData.find((article) => article.id === id);
      resolve(article || null); 
    }, 500); 
  });
};