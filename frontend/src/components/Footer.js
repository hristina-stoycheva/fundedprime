import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Menu from "./Menu";
import FooterMenu from "./FooterMenu";
import "./styles/Footer.css";
import { FOOTER_SETTINGS } from "../apollo/queries";

const Footer = () => {
  const { loading, error, data } = useQuery(FOOTER_SETTINGS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading footer data.</p>;
  const footerData = data.themeSettings.themeSettingsFields.footer;
  console.log(footerData);
  return (
    <div className="section_footer pb-5 pt-3">
      <div className="footer container">
        <div className="footer_top_line pb-5 row">
          <div className="col-8 menu_topline_footer ps-0">
            <Menu />
          </div>
          <div className="col-4 footer_top_right text-end">
            {footerData.logo && footerData.logo.node.mediaItemUrl && (
              <img
                src={footerData.logo.node.mediaItemUrl}
                alt="Brand Logo"
                className="d-inline-block align-top "
                style={{ height: "25px" }}
              />
            )}
            <div className="footer_top_text">{footerData.footerEmail}</div>
          </div>
        </div>
        <div className="footer_bottom_line pt-5 row">
          <div className="footer_bottom_menu ps-0">
            <FooterMenu />
          </div>
          <div className="footer_bottom_text ps-0">
            {footerData.footerBottomText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
