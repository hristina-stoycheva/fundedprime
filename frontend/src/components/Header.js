import React from "react";
import Menu from "./Menu";
import "./styles/style.css";
import { useQuery } from "@apollo/client";
import { GET_HEADER_SETTINGS } from "../apollo/queries";

const Header = () => {
  const { loading, error, data } = useQuery(GET_HEADER_SETTINGS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading navigation: {error.message}</p>;
  const navigation = data.themeSettings.themeSettingsFields.navigation;
  const buttons = data.themeSettings.themeSettingsFields.navigation.buttons;
  // console.log(buttons);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand col-2 header-logo" href="/">
          {navigation.logo && navigation.logo.node.sourceUrl && (
            <img
              src={navigation.logo.node.sourceUrl}
              alt="Brand Logo"
              className="d-inline-block align-top "
              style={{ height: "34px" }}
            />
          )}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse col-7 justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <Menu />
          </ul>
        </div>
        <div className="col-3 buttons-in-right text-end">
          {Object.entries(buttons).map(([key, button]) => (
            <a
              key={key}
              href={button.url}
              className={`funded-btn ${
                key === "0" ? "funded-white-btn" : "funded-black-btn ms-2"
              }`}
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Header;
