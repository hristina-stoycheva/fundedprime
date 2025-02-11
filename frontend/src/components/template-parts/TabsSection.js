import React from "react";
import "../styles/Tabs.css";

const Tabs = ({ title, text, tabs }) => {
  return (
    <div className="container pt-5 pb-5">
      {title && (
        <div className="row">
          <h2 className="text-center">{title}</h2>
        </div>
      )}
      {text && (
        <div
          className="row text-center"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        {tabs?.length > 0 &&
          Object.entries(tabs).map(([key, tab], index) => (
            <li className="nav-item" role="presentation" key={key}>
              <button
                className={`nav-link ${index === 0 ? "active" : ""}`}
                id={`tab-${key}`}
                data-bs-toggle="pill"
                data-bs-target={`#item${key}`}
                type="button"
                role="tab"
                aria-controls={`item${key}`}
                aria-selected={index === 0 ? "true" : "false"}
              >
                {tab.generalTabTitle}
              </button>
            </li>
          ))}
      </ul>

      <div className="tab-content" id="pills-tabContent">
        {tabs?.length > 0 &&
          Object.entries(tabs).map(([key, tab], index) => (
            <div
              key={key}
              className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
              id={`item${key}`}
              role="tabpanel"
              aria-labelledby={`tab-${key}`}
            >
              {tab.generalTabTitle}
            </div>
          ))}
      </div>
    </div>
  );
};
export default Tabs;
