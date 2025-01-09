import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import "./styles/Header.css";
import { fetchACFData } from "../api";

const Header = () => {
  const [acfData, setAcfData] = useState({});
  const [buttons, setButtons] = useState({});

  // Fetch ACF data when the component mounts
  useEffect(() => {
    const getACFData = async () => {
      const data = await fetchACFData(); // Fetch the ACF data
      setAcfData(data.navigation); // Update the state with the fetched ACF data
    };
    getACFData(); // Call the function to fetch data
    const getButtons = async () => {
      const data = await fetchACFData(); // Fetch the ACF data
      if (data?.navigation?.buttons) {
        setButtons(data.navigation.buttons);
      }
    };
    getButtons(); // Call the function to fetch data
  }, []); // Empty dependency array means this effect runs only once when the component mounts
  const buttonArray = Object.values(buttons);
  // console.log(buttonArray);

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand col-2 header-logo" href="/">
          {acfData.logo && acfData.logo.url && (
            <img
              src={acfData.logo.url} // Use the image URL from ACF
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
