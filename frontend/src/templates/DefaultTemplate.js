import React from "react";
import { useParams } from "react-router-dom";
import "../components/styles/style.css";
import { useQuery } from "@apollo/client";
import { GET_SECTION } from "../apollo/queries";
import VideoHeader from "../components/template-parts/VideoHeader";
import TextLeftImageRight from "../components/template-parts/TextLeftImageRight";

const DefaultTemplate = () => {
  const { slug } = useParams();
  const currentSlug = slug || "404";

  const { loading, error, data } = useQuery(GET_SECTION, {
    variables: { slug: currentSlug },
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  const sections = data.pageBy.sections;
  // console.log(sections);

  return (
    <div>
      {sections?.section?.length > 0 &&
      sections.section.map((section, index) => {
        let content;

        // Switch based on the first value of `section.selectSection`
        const selectedValue = section.selectSection?.[0];
        switch (selectedValue) {
          case "video_header":
            const videoHeaderData = section.videoHeader;
            content = (
              <VideoHeader
                title={videoHeaderData?.title || ""}
                buttonsa={videoHeaderData?.buttons || []}
                text={videoHeaderData?.text || ""}
                videourl={videoHeaderData?.video?.node?.mediaItemUrl || ""}
                imageintop={videoHeaderData?.imageBeforeTitle?.node?.mediaItemUrl || ""}
              />
            );
            break;
          case "text_img_columns":
            const textAndImageInColumns = section.textAndImageInColumns;
            // console.log(textAndImageInColumns);

            content = (
              <TextLeftImageRight 
              title={textAndImageInColumns?.title || ""} 
              text={textAndImageInColumns?.text || ""} 
              imageUrl={textAndImageInColumns?.image?.node?.mediaItemUrl || ""} 
              imgPosition={textAndImageInColumns?.imagePosition || ""}
              bgColor={textAndImageInColumns?.backgroundColor || ""}
              buttonsa={textAndImageInColumns?.buttons || []}
              />
            );
            break;
        }

        return (
          <div key={index} className={selectedValue}>
            {/* <h2>Section {index + 1}</h2> */}
            {content}
           </div>
        );
      })}
    </div>
  );
};

export default DefaultTemplate;
