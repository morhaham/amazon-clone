import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <Link onClick={scrollToTop}>
        <div className="footer__top">
          <p>Back to top</p>
        </div>
      </Link>
      <div className="footer__container">
        <div className="footer__section">
          <p className="footer__sectionTitle">
            <strong>Get To Know Us</strong>
          </p>
          <div className="footer__links">
            <a href="">Careers</a>
            <a href="">Blog</a>
            <a href="">About Amazon</a>
            <a href="">Investor Relations</a>
          </div>
        </div>
        <div className="footer__section">
          <p className="footer__sectionTitle">
            <strong>Make Money with Us</strong>
          </p>
          <div className="footer__links">
            <a href="">Sell products on Amazon</a>
            <a href="">Sell apps on Amazon</a>
            <a href="">Become an Affiliate</a>
            <a href="">Advertise Your Products</a>
          </div>
        </div>
        <div className="footer__section">
          <p className="footer__sectionTitle">
            <strong>Amazon Payment Products</strong>
          </p>
          <div className="footer__links">
            <a href="">Amazon Business Card</a>
            <a href="">Shop with Points</a>
            <a href="">Reload Your Balance</a>
            <a href="">Amazon Currency Converter</a>
          </div>
        </div>
        <div className="footer__section">
          <p className="footer__sectionTitle">
            <strong>Let Us Help You</strong>
          </p>
          <div className="footer__links">
            <a href="">Amazon and COVID-19</a>
            <a href="">Your Account</a>
            <a href="">Your Orders</a>
            <a href="">Shipping Rates & Policies</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <Link to="/">
          <img
            className="footer__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
            alt="Amazon logo"
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
