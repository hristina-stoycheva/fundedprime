import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import FooterMenu from "./FooterMenu";
import "./styles/Footer.css";
import { fetchACFData } from "../api";
const Footer = () => {
      const [acfData, setAcfData] = useState({});
    // Fetch ACF data when the component mounts
      useEffect(() => {
        const getACFData = async () => {
          const data = await fetchACFData(); // Fetch the ACF data
          setAcfData(data.footer); // Update the state with the fetched ACF data
        };
        getACFData(); // Call the function to fetch data
        
      }, []);
      return (
    <div className="footer container">
      <div className="footer_top_line row">
        <div className="col-8 menu_topline_footer">
        <Menu />
        </div>
        <div className="col-4 footer_top_right">
        {acfData.logo && acfData.logo.url && (
            <img
              src={acfData.logo.url} // Use the image URL from ACF
              alt="Brand Logo"
              className="d-inline-block align-top "
              style={{ height: "34px" }}
            />
          )}
        <div className="footer_top_text">{acfData.footer_email}</div>
        </div>
      </div>
      <div className="footer_top_line row">
        <div className="footer_bottom_menu"><FooterMenu /></div>
        <div className="footer_bottom_text">{acfData.footer_bottom_text}</div>
        
      </div>
    </div>
  );
};
export default Footer;
