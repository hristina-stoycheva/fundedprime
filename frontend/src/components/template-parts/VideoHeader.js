import React from "react";
const VideoHeader = ({ videourl, text, buttonsa, title, imageintop }) => (
  <div className="topvideosection section">
    <div className="overlay"></div>

    {videourl && (
      <video
        playsInline="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src={videourl} type="video/mp4" />
      </video>
    )}
    <div className="container h-100">
      <div className="d-flex h-100  w100 flex-column justify-content-center">
        <div className="cwhite p-2 col-8">
          {imageintop && <img src={imageintop} className="vh_img_top" />}
          {title && <h2>{title}</h2>}
          {text && (
            <div
              className="vh_text"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
        </div>
        <div className="buttons-in-right col-8 p-2">
          {buttonsa?.length > 0 &&
            Object.entries(buttonsa).map(([key, button]) => (
              <a
                key={key}
                href={button?.url || "#"}
                className={`funded-btn ${
                  key === "0"
                    ? "funded-purple-btn"
                    : "funded-purple-dark-btn ms-2"
                }`}
              >
                {button?.text || "Button"}
              </a>
            ))}
        </div>
      </div>
    </div>
  </div>
);
export default VideoHeader;
