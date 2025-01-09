import React, { useEffect, useState, Suspense } from 'react';
import { fetchPageData } from '../api'; // Function to fetch page data from WordPress API

const Page = ({ slug }) => {
  const [page, setPage] = useState(null);

  // Fetch page data when the component mounts
  useEffect(() => {
    const getPageData = async () => {
      const data = await fetchPageData(slug); // Fetch page data by slug
      setPage(data);
    };
    getPageData();
  }, [slug]);

  if (!page) {
    return <div>Loading...</div>; // Show loading message while the page is being fetched
  }

  // Dynamically load the template based on the fetched template name
  let TemplateComponent;
  switch (page.template) {
    case 'homepage.php':
      TemplateComponent = React.lazy(() => import('../templates/HomeTemplate')); // Corrected path
      break;
    case 'about-template.php':
      TemplateComponent = React.lazy(() => import('../templates/AboutTemplate')); // Corrected path
      break;
    case 'contact-template.php':
      TemplateComponent = React.lazy(() => import('../templates/ContactTemplate')); // Corrected path
      break;
    default:
      TemplateComponent = () => <div>{page.content.rendered}</div>; // Default content if no template matches
  }

  return (
    <div>
      <h1>{page.title.rendered}</h1>
      <Suspense fallback={<div>Loading template...</div>}>
        <TemplateComponent /> {/* Render the dynamically imported template */}
      </Suspense>
    </div>
  );
};

export default Page;
