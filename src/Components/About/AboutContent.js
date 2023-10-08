import React from "react";
import "./AboutContentStyles.css"
import aboutImg from "../../assets/aboutImg.jpeg";
import { Link } from "react-router-dom";
import { Component } from "react";
import jsPDF from "jspdf";
import CV from "../../assets/CV.jpg"
class AboutContent extends Component {
  pdfGenerate = () => {
    var doc = new jsPDF("portrait", "px", "a4", "false");
    doc.addImage(CV, "jpg", 0, 0, 450, 500);
    doc.save("CV.pdf");
  }
  render() {
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
                  I am currently pursuing a Master's degree at Sup De Vinci College,
                  with a strong aspiration to engage in a work-study program as a Full Stack Developer.
                  My preferred schedule involves alternating between 1 week of intensive learning and 3 weeks of practical application within a business setting.
                  I am committed to making myself available whenever possible, striving to make valuable contributions while ensuring continuous learning and growth.
                </p>
                <p className="about_text ">
                  I identify myself as a proficient full-stack developer, specializing in Java, Python, Node js, Ruby on Rails and React JS .
                  My expertise lies in crafting elegant, user-centric websites and applications that seamlessly blend form and function. With a fervent enthusiasm for creating dynamic, feature-rich web solutions,
                  I am dedicated to delivering a cohesive and enjoyable user experience.
                </p>
                <p className="about_text ">
                  Driven by a passion for problem-solving, I eagerly embrace challenges in my professional journey.
                  I am particularly thrilled to be entering the deployment phase of my career as a full-stack developer, poised to bring innovative solutions to fruition. My ambition fuels my commitment to pushing boundaries and exploring the realms of possibility. Having previously excelled as a Web Developer, I bring a wealth of experience to the realm of web application development,
                  enriching collaborative efforts within a team.
                </p>
                <p className="about_text ">
                  Recognized for my leadership-oriented approach, I find satisfaction in both independent work and collaborative endeavors, consistently striving to exceed ambitious objectives. I am proud to have spearheaded the development of numerous web applications and database systems, showcasing my proficiency in turning concepts into reality.

                  Thank you for considering my profile.

                  Sincerely,
                  Prajay Chaudhary
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
