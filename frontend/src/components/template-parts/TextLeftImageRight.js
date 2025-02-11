import React from "react";

const TextLeftImageRight = ({ title, text, imageUrl, imgPosition, bgColor, buttonsa }) => {
  const rowClass = bgColor ? `pt-5 pb-5 row bgc-${bgColor}` : "row pt-5 pb-5";

  // Check if imgPosition contains "left"
  const isLeftAligned = Array.isArray(imgPosition) && imgPosition.includes("left");

  // Conditionally assign column classes
  const textColumnClass = isLeftAligned ? "textcolumn col-5 order-1 " : "textcolumn col-7";
  const imageColumnClass = isLeftAligned ? "imagecolumn col-5 order-0 d-flex align-items-center justify-content-center" : "imagecolumn col-5 d-flex align-items-center justify-content-center";

  return (
    <div className="container pt-5 pb-5">
      <div className={rowClass}>
        <div className={textColumnClass}>
          {title && <h2>{title}</h2>}
          {text && <div className="ir_text" dangerouslySetInnerHTML={{ __html: text }} />}
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
        <div className={imageColumnClass}>
          {imageUrl && <img className="imageRight" src={imageUrl} alt="Section visual" />}
        </div>
      </div>
    </div>
  );
};

export default TextLeftImageRight;
