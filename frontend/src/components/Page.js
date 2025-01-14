import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router-dom'; // За извличане на параметъра slug
import { fetchPageData } from '../api'; // Функция за извличане на данни от WordPress API

const Page = () => {
  const { slug } = useParams(); // Извличаме slug от URL параметрите
  const [page, setPage] = useState(null);

  useEffect(() => {
    const getPageData = async () => {
      const data = await fetchPageData(slug);
      // console.log('Page data for slug:', slug, data); // Проверете данните в конзолата
      setPage(data);
    };
    getPageData();
  }, [slug]); // Ще се изпълни всеки път, когато slug се промени

  if (!page) {
    return <div>Loading...</div>; // Показваме "Loading..." докато не заредим данните
  }

  let TemplateComponent;
  // console.log('Page template:', page.template);

  switch (page.template) {
    case '':
      TemplateComponent = React.lazy(() => import('../templates/HomeTemplate'));
      break;
    case 'templates/homepage.php':
      TemplateComponent = React.lazy(() => import('../templates/HomeTemplate'));
      break;
    case 'templates/about-template.php':
      TemplateComponent = React.lazy(() => import('../templates/AboutTemplate'));
      break;
    case 'templates/contact-template.php':
      TemplateComponent = React.lazy(() => import('../templates/ContactTemplate'));
      break;
    default:
      TemplateComponent = () => <div>{page.content.rendered}</div>;
  }

  return (
    <div>
      <Suspense fallback={<div>Loading template...</div>}>
        <TemplateComponent />
      </Suspense>
    </div>
  );
};

export default Page;
