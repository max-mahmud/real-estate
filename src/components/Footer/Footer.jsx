import React from "react";
import "./Footer.css";
import logo from "../../../public/logo2.png";

const Footer = () => {
  return (
    <div className="container-fluid px-5 paddings">
      <div className="footer">
        <div className="f-left">
          <img src={logo} alt="Logo" />
          <p className="secondaryText">
            Our vision is to make all people <br /> the best place to live for
            them.
          </p>
        </div>
        <div className="f-right">
          <h3 className="primaryText">Information</h3>
          <p className="secondaryText">145 New York, FL 5467, USA</p>
          <div className="footer-menu">
            <a href="">Property</a>
            <a href="">Services</a>
            <a href="">Product</a>
            <a href="">About Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
