import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import FooterMenu from "./FooterMenu";
import "./styles/Footer.css";
import { fetchACFData } from "../api";
const Footer = () => {
  return (
    <div className="container">
      <Menu />
      <FooterMenu />
    </div>
  );
};
export default Footer;
