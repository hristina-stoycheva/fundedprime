import React from "react";
const DoubleCardSection = ({ title, text, cards }) => {
  return (
    <div className="container pt-5 pb-5">
      {title && (
        <div className="row">
          <h2 className="text-center">{title}</h2>
        </div>
      )}
      {text && (
        <div className="row">
          <p className="text-center">{text}</p>
        </div>
      )}
      <div className="row justify-content-center cardsrow gap-5 pt-5">
        {cards?.length > 0 &&
          Object.entries(cards).map(([key, card]) => (
            <div key={key} className="singleCard col-12 col-md-6 col-lg-6 mb-4"  style={card?.backgroundColor ? { backgroundColor: card.backgroundColor } : {}}
            >
              {card?.imageInTop?.node?.mediaItemUrl && (
                <img
                  className="cardAbsImg"
                  src={card.imageInTop.node.mediaItemUrl}
                />
              )}
              {card?.title && <h3 className="cardsTitle pb-4">{card.title}</h3>}
              {card?.text && <p className="cardText">{card.text}</p>}
              <div className="row mt-4 mb-4">
                {card.logos?.length > 0 &&
                  Object.entries(card?.logos).map(([key, singlelogo]) => (
                    <div key={key} className="singleImglogo col-auto">
                      {singlelogo?.logo?.node?.mediaItemUrl && (
                        <img
                          className="cardSingleLogo"
                          src={singlelogo.logo.node.mediaItemUrl}
                        />
                      )}
                    </div>
                  ))}
              </div>
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
export default DoubleCardSection;
