import React from "react";
import { useParams } from "react-router-dom";
import "../components/styles/Homepage.css";
import { useQuery } from "@apollo/client";
import { GET_PAGE_DATA } from "../apollo/queries";
import VideoHeader from "../components/template-parts/VideoHeader";
import TextLeftImageRight from "../components/template-parts/TextLeftImageRight";
const HomeTemplate = () => {
  const { slug } = useParams();
  const currentSlug = slug || "home";

  const { loading, error, data } = useQuery(GET_PAGE_DATA, {
    variables: { slug: currentSlug },
  });
  if (loading) {
    return <div>Loading...</div>;
  }
  const { topVideoSection: topVideoSection, textRightImage: textRightImage } = data.pageBy.acfhome;
  console.log(textRightImage.image.node.sourceUrl);
  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }
  return <div className="homepage">
    {
        <VideoHeader buttonsa={topVideoSection.buttons} text={topVideoSection.text} videourl={topVideoSection.video.node.mediaItemUrl}/>

    }
    {
        <TextLeftImageRight text={textRightImage.text} imageUrl={textRightImage.image.node.sourceUrl} />

    }
  </div>;
};
export default HomeTemplate;
