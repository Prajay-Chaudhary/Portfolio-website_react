import React from "react";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,

} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>169 Bis Avenue D'argenteuil</p>
              <p>92600,Asnières-sur-Seine</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              (+33)-07 62 11 42 00
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              prajaychaudhary5678@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
            I am currently pursuing a Master's degree at Sup De Vinci College, with a strong aspiration to engage in a work-study program as a Full Stack Developer. My preferred schedule involves alternating between 1 week of intensive learning and 3 weeks of practical application within a business setting. I am committed to making myself available whenever possible, striving to make valuable contributions while ensuring continuous learning and growth.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/prajay.arya">
              <FaFacebook
                size={20}
                style={{ color: "#4968ad", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/prajay-chaudhary-0670871aa/">
              <FaLinkedin
                size={20}
                style={{ color: "#0E76A8", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.instagram.com/arya_prajay/">
              <FaInstagram
                size={20}
                style={{ color: "#c13584", marginRight: "1rem" }}
              />
            </a>
            <a href="https://github.com/Prajay-Chaudhary">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
