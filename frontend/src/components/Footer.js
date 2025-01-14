import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import FooterMenu from "./FooterMenu";
import "./styles/Footer.css";
import { fetchACFData } from "../api";
const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer_top_line row">
        <div className="col-8 menu_topline_footer">
        <Menu />
        </div>
        <div className="col-4 footer_top_right">
        <div className="logo_topline_footer">Logo</div>
        <div className="footer_top_text">email</div>
        </div>
      </div>
      <div className="footer_top_line row">
        <div className="footer_bottom_menu"><FooterMenu /></div>
        <div className="footer_bottom_text">text</div>
        
      </div>
    </div>
  );
};
export default Footer;
