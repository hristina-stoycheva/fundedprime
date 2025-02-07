import React from "react";
const CardsSection = ({ title, text, cards }) => {
  return (
    <div className="container pt-5 pb-5">
      {title && (
        <div className="row">
          <h2 className="text-center">{title}</h2>
        </div>
      )}
      {text && (
                <div className="row text-center" dangerouslySetInnerHTML={{ __html: text }} />

      )}
      <div className="row justify-content-center cardsrowtrip gap-4 pt-5">
        {cards?.length > 0 &&
          Object.entries(cards).map(([key, card]) => (
            <div
              key={key}
              className={`singleCardtriple col-12 ${
                cards.length > 2 ? "col-md-3 col-lg-3" : "col-md-4 col-lg-4 minh500"
              } mb-4`}
              style={{
                ...(card?.backgroundImage?.node?.mediaItemUrl && {
                  backgroundImage: `url(${card.backgroundImage.node.mediaItemUrl})`,
                }),
                ...(card?.backgroundColor && {
                  backgroundColor: card.backgroundColor,
                }),
              }}
            >
              {card?.imageInTop?.node?.mediaItemUrl && (
                <img
                  className="cardAbsImg"
                  src={card.imageInTop.node.mediaItemUrl}
                />
              )}
              {card?.imageBeforeTitle?.node?.mediaItemUrl && (
                <img
                  className="imgBeforeTitle"
                  src={card.imageBeforeTitle.node.mediaItemUrl}
                />
              )}
              {card?.title && (
                <h3 className="cardsTitleTrip pb-4" dangerouslySetInnerHTML={{ __html: card.title }} />
              )}
              {card?.text && <div className="cardText" dangerouslySetInnerHTML={{ __html: card.text }} />}
          {card.logos?.length > 0 && (
                <div className="row mt-4 mb-4">
                  {Object.entries(card?.logos).map(([key, singlelogo]) => (
                    <div key={key} className="singleImglogo col-auto">
                      {singlelogo?.logo?.node?.mediaItemUrl && (
                        <img
                          className="cardSingleLogo"
                          src={singlelogo.logo.node.mediaItemUrl}
                          alt="logo"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {card?.buttonText && card?.buttonUrl && (
                <a href={card.buttonUrl} className="cardButton">
                  {card.buttonText} &rarr;
                </a>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};
export default CardsSection;
