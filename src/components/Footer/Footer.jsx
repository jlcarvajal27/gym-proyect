import React from "react";
import "./Footer.css";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
// import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-link">
          <a
            href="https://github.com/jlcarvajal27"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/jorge-luis-carvajal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/carvajalsw/?hl=es-la">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
        <div className="logo-footer">
          {/* <img src={logo} alt="" /> */}
          <span> Dev: Jorge luis Carvajal ©</span>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Footer;
