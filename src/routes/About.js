import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';
import AboutContent from "../Components/AboutContent";
import ExperienceAndTraining from '../Components/ExperienceAndTraining';
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="I am friendly full-stack developer" />
      <AboutContent />
      <h1 style={{ textAlign: "center", marginBottom: "100px" }}>School Diploma and Experience</h1>
      <ExperienceAndTraining />
      <Footer />
    </div>
  );
}

export default About