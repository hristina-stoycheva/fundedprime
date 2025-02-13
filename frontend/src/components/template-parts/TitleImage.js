import React from "react";

const TitleImage = ({ title, button, image ,bgcolor}) => {
  return (
    <div className="container pt-5 pb-5 TitleImage text-center" style={{backgroundColor:bgcolor}}>
      {title && <h2 className="text-center">{title}</h2>}
      {button?.text && button?.url && (
                <a href={button.url} className="funded-btn funded-purple-btn mt-3">
                  {button.text}
                </a>
              )}
          {image && <img className="fullimage" src={image?.node?.mediaItemUrl} alt="Section visual" />}

    </div>
  );
};

export default TitleImage;
