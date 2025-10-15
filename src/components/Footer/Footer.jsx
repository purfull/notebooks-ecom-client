import React from "react";
import "./Footer.scss";
import { Divider } from "antd";
import { Link } from "react-router-dom";

import Instagram from "../../assets/icon/insta.png";
import Whatsapp from "../../assets/icon/whatsapp.png";
const Footer = () => {
  return (
    <div className="footer-component">
      <div className="footer-top">
        <div className="footer-one">
          <h4 className="footer-title">Brand Name</h4>
        </div>
        <div className="footer-two">
          <h4 className="footer-title">Products</h4>
          <div className="footer-details">
            <span>Listings</span>
          </div>
        </div>
        <div className="footer-three">
          <h4 className="footer-title">Contacts</h4>
          <div className="footer-details">
            <span>Phone</span>
            <span>Mail</span>
            <span>Location</span>
            <div className="icons">
              <img src={Instagram} alt="insta" />
              <img src={Whatsapp} alt="whatsapp" />
            </div>
          </div>
        </div>
        <div className="footer-four">
          <h4 className="footer-title">Quick Links</h4>
          <div className="footer-details">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
        <div className="footer-five">
          <h4 className="footer-title">Help</h4>
          <div className="footer-details">
            <Link to="/support" className="help-info">
              Support
            </Link>
            <Link className="help-info">Shipping</Link>
            <Link className="help-info">Returns</Link>
            <Link className="help-info">Order Status</Link>
          </div>
        </div>
      </div>

      {/* <div className="footer-six"></div> */}
      <Divider />
      <div className="footer-bottom">
        <div className="footer-bottom-one">
          <span>&copy;2025-All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
