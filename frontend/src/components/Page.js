import React, { Suspense } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PAGE_BY_SLUG } from "../apollo/queries";

const Page = () => {
  const { slug } = useParams();
  const currentSlug = slug || "home";

  const { loading, error, data } = useQuery(GET_PAGE_BY_SLUG, {
    variables: { slug: currentSlug },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading page: {error.message}</div>;
// console.log(data);
  const page = data.pageBy;

  if (!page) {
    return <div>Page not found</div>;
  }

  let TemplateComponent;

  // Determine which template to use
  switch (page.template?.templateName) {
    case "Homepage":
      TemplateComponent = React.lazy(() => import("../templates/HomeTemplate"));
      break;
    case "About":
      TemplateComponent = React.lazy(() => import("../templates/AboutTemplate"));
      break;
    case "Contact":
      TemplateComponent = React.lazy(() => import("../templates/ContactTemplate"));
      break;
      case "Default":
        TemplateComponent = React.lazy(() => import("../templates/DefaultTemplate"));
        break;
    default:
      TemplateComponent = () => <div dangerouslySetInnerHTML={{ __html: page.content }} />;
  }

  return (
    <div>
      <h1>{page.title}</h1>
      <Suspense fallback={<div>Loading template...</div>}>
        <TemplateComponent />
      </Suspense>
    </div>
  );
};

export default Page;
