import React from "react";
import { GET_PAGE_FIELDS } from "../apollo/queries";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import VideoHeader from "../components/template-parts/VideoHeader";
import TextLeftImageRight from "../components/template-parts/TextLeftImageRight";
import CardsSection from "../components/template-parts/CardsSection";
import Tabs from "./template-parts/TabsSection";
import "./styles/style.css";


const Page = () => {
  const { slug } = useParams();
  const currentSlug = slug || "home";

  const { loading, error, data } = useQuery(GET_PAGE_FIELDS, {
    variables: { slug: currentSlug },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading page: {error.message}</div>;

  const content = data?.pageBy?.content;
// console.log(content);
  return (
    <div>
      {content?.contentSection?.length > 0 &&
        content.contentSection.map((section, index) => {
          let TemplateComponent = null;
          const selectedValue = section?.fieldGroupName; // Fixed declaration
          // console.log(selectedValue);
          // Determine which template to use
          switch (selectedValue) {
            case "ContentContentSectionHeaderVideoLayout":
              TemplateComponent = (
                <VideoHeader
                  title={section?.title || ""}
                  buttonsa={section?.buttons || []} // Fixed reference
                  text={section?.text || ""}
                  videourl={section?.video?.node?.mediaItemUrl || ""}
                  imageintop={section?.imageBeforeTitle?.node?.mediaItemUrl || ""}
                />
              );
              break;

            case "ContentContentSectionTextAndImageInColumnsLayout":
              // console.log(section.image.node.mediaItemUrl);
              TemplateComponent = (
                <TextLeftImageRight
                  title={section?.title || ""}
                  text={section?.text || ""}
                  imageUrl={section?.image?.node?.mediaItemUrl || ""}
                  imgPosition={section?.imagePosition || ""}
                  bgColor={section?.backgroundColor || ""}
                  buttonsa={section?.buttons || []}
                />
              );
              break;

            case "ContentContentSectionCardsLayout":
              // console.log(section.card);
              TemplateComponent = (
                <CardsSection
                  title={section?.title || ""}
                  text={section?.text || ""}
                  cards={section?.card || ""}
                  />
              );
              break;
              case "ContentContentSectionTabsSectionLayout":
                 console.log(section.title);
                TemplateComponent = (
                  <Tabs
                    title={section?.title || ""}
                    text={section?.text || ""}
                    tabs={section?.generalTab || ""}
                    />
                );
                break;
          }

          return (
            <div key={index} className={selectedValue}>
              {TemplateComponent}
            </div>
          );
        })}
    </div>
  );
};

export default Page;
