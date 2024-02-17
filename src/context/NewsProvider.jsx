import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";

export const NoticeContext = createContext();
export const useNews = () => useContext(NoticeContext);

export const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const CallApi = async () => {
      const key = "51e418b737dc4030a9da5e4c04f2de1a";
      const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${key}`;
      const { data } = await axios(URL);
      setNews(data.articles);
    };

    CallApi();
  }, [category]);

  const HandleCategory = (e) => {
    setCategory(e.target.value);
  };
  return (
    <NoticeContext.Provider value={{ news, category, HandleCategory }}>
      {children}
    </NoticeContext.Provider>
  );
};
