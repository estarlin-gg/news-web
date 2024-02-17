import axios from "axios";
import { createContext, useEffect, useState,useContext } from "react";

export const NoticeContext = createContext();
export const useNews = () => useContext(NoticeContext);

export const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("general");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const CallApi = async () => {
      const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`;
      const { data } = await axios(URL);
      console.log(data);
      setNews(data.articles);
    };

    CallApi();
  }, [category]);

  const HandleCategory = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };
  return (
    <NoticeContext.Provider value={{ news, category, HandleCategory }}>
      {children}
    </NoticeContext.Provider>
  );
};
