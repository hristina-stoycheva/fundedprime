import React from "react";
const VideoHeader = ({videourl,text,buttonsa})=>(
    <div className="topvideosection section">
        <div className="overlay"></div>

        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src={videourl} type="video/mp4" />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100  w100 flex-column justify-content-center">
            <div
              className="cwhite p-2 col-8"
              dangerouslySetInnerHTML={{ __html: text }}
            />
            <div className="buttons-in-right col-8 p-2">
              {Object.entries(buttonsa).map(([key, button]) => (
                <a
                  key={key}
                  href={button.buttonUrl}
                  className={`funded-btn ${
                    key === "0"
                      ? "funded-purple-btn"
                      : "funded-purple-dark-btn ms-2"
                  }`}
                >
                  {button.buttonText}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
);
export default VideoHeader;