import React from "react";
import "../styles/Tabs.css";

const Tabs = ({ title, text, tabs, sectioncounter }) => {
  return (
    <div className="container pt-5 pb-5 tabscontainer">
      {title && <h2 className="text-center">{title}</h2>}
      {text && (
        <div
          className="text-center"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}

      {/* Main Tabs */}
      <ul className="nav nav-pills mb-3 generalTabList d-flex w-100" role="tablist">
        {tabs?.map((tab, index) => (
          <li className="nav-item flex-fill text-center" role="presentation" key={index}>
            <button
              className={`nav-link w-100 ${index === 0 ? "active" : ""}`}
              data-bs-toggle="pill"
              data-bs-target={`#tab-${sectioncounter}-${index}`}
              type="button"
              role="tab"
              aria-selected={index === 0 ? "true" : "false"}
            >
              {tab.generalTabTitle}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        {tabs?.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
            id={`tab-${sectioncounter}-${index}`}
            role="tabpanel"
          >
            {/* Internal Tabs */}
            {tab?.internalTab && tab.internalTab.length > 0 && (
              <>
                <ul className="nav inttablist nav-pills mb-3 d-flex w-100" role="tablist">
                  {tab.internalTab.map((intTab, intIndex) => (
                    <li className="nav-item flex-fill text-center" role="presentation" key={intIndex}>
                      <button
                        className={`nav-link w-100 ${intIndex === 0 ? "active" : ""}`}
                        data-bs-toggle="pill"
                        data-bs-target={`#internal-tab-${sectioncounter}-${index}-${intIndex}`}
                        type="button"
                        role="tab"
                        aria-selected={intIndex === 0 ? "true" : "false"}
                      >
                        {intTab.title}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Internal Tab Content */}
                <div className="tab-content">
                  {tab.internalTab.map((intTab, intIndex) => (
                    <div
                      key={intIndex}
                      className={`tab-pane fade ${intIndex === 0 ? "show active" : ""}`}
                      id={`internal-tab-${sectioncounter}-${index}-${intIndex}`}
                      role="tabpanel"
                    >
                      {/* Cards Section */}
                      <div className="row justify-content-center">
                        {intTab.tabCard.map((card, cardIndex) => (
                          <div key={cardIndex} className="col-md-3 d-flex justify-content-center">
                            <div
                              className={`card tabsinglecard ${card.infoCard ? "infocard" : ""}`}
                              style={{
                                backgroundColor: card.backgroundColor || "white",
                                color: card.textColor || "black",
                              }}
                            >
                              <div
                                className="card-body d-flex flex-column align-items-center text-center"
                                style={{ color: card.textColor || "black" }}
                              >
                                <h5 className="card-title">{card?.title ? card.title : "\u00A0"}</h5>
                                <ul className="cardsList list-unstyled d-flex flex-column align-items-center">
                                  {card.row.map((rowItem, rowIndex) => (
                                    <li key={rowIndex} style={{ color: card.textColor || "black" }}>
                                      {rowItem.text}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="text-center mt-3">
                        <a href={intTab.button.url} className="btn btn-primary">
                          {intTab.button.text}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
