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
    <div className="section_footer pb-5 pt-3">
      <div className="footer container">
        <div className="footer_top_line pb-5 row">
          <div className="col-8 menu_topline_footer ps-0">
            <Menu />
          </div>
          <div className="col-4 footer_top_right text-end">
            {acfData.logo && acfData.logo.url && (
              <img
                src={acfData.logo.url} // Use the image URL from ACF
                alt="Brand Logo"
                className="d-inline-block align-top "
                style={{ height: "25px" }}
              />
            )}
            <div className="footer_top_text">{acfData.footer_email}</div>
          </div>
        </div>
        <div className="footer_bottom_line pt-5 row">
          <div className="footer_bottom_menu ps-0">
            <FooterMenu />
          </div>
          <div className="footer_bottom_text ps-0">{acfData.footer_bottom_text}</div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
