import React from "react";
import "./AboutContentStyles.css";
import aboutImg from "../assets/aboutImg.jpeg";
import { Link } from "react-router-dom";
import { Component } from "react";
import jsPDF from "jspdf";
import CV from "../assets/CV.jpg"
class AboutContent extends Component {
  pdfGenerate = () => {
    var doc = new jsPDF("portrait", "px", "a4", "false");
    doc.addImage(CV, "jpg", -5, 0, 450, 500);
    doc.save("CV.pdf");
  }
  render()
  {
    return (
      <div className="about component__space">
        <div className="container">
          <div className="row">
            <div className="col__2">
              <img src={aboutImg} alt="" className="about__image" />
            </div>
            <div className="col__2">
              <h1 className="about__heading">About Me</h1>
              <div className="about_meta">
                <p className="about_text ">
                  I am a developer, Currently studying the Full-stack
                  Developement path on OpenClassrooms which is Europe’s largest
                  online education platform.
                </p>
                <p className="about_text ">
                  As a problem solver who loves facing challenges in my work,
                  I'm excited to be at the deployment phase of my career as a
                  full-stack developer. I'm passionate and ambitious about my
                  work, and love to be on a team that questions possibilities.
                  I've previously been an animator, and bring those skills to my
                  UI development on a team. Independently, I've accomplished
                  website building projects as a freelancer for over two years.
                </p>
                <p className="about_text ">
                  A leadership driven worker, Prajay Chaudhary enjoys working
                  both on his own and as part of a team to work toward
                  challenging goals. He has built numerous websites and database
                  systems.
                </p>
                <div className="about_btn">
                  <a href="#">
                    <button
                      onClick={this.pdfGenerate}
                      className="btn btn_modification custom-btn"
                    >
                      Download CV
                    </button>
                  </a>
                  <Link to={"/Contact"} className="btn btn_modification custom-btn">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AboutContent;
