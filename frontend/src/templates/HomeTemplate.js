import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from "react-router-dom"; // За извличане на параметъра slug
import { fetchPageData } from "../api"; // Функция за извличане на данни от WordPress API
const HomeTemplate = () => {
  const { slug } = useParams(); // Извличаме slug от URL параметрите
  const [page, setPage] = useState(null);

  useEffect(() => {
    const getPageData = async () => {
      const data = await fetchPageData(slug);
      // console.log("Page data for slug:", slug, data); // Проверете данните в конзолата
      setPage(data);
    };
    getPageData();
  }, [slug]); // Ще се изпълни всеки път, когато slug се промени


  let TemplateComponent;
  return (
    <div>
      <h2>Welcome to the Home Template</h2>
      <p>This is the home page template.</p>
    </div>
  );
};

export default HomeTemplate;
