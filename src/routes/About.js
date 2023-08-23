import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImg2 from '../Components/HeroImg2';
import AboutContent from "../Components/AboutContent";
import ExperienceAndTraining from '../Components/ExperienceAndTraining';
import Skills from '../Components/Skills';
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="I am friendly full-stack developer" />
      <AboutContent />
      <Skills />
      <h1 style={{ textAlign: "center", marginBottom: "100px", fontSize: "60px", marginTop: "60px" }}>School Diploma and Experience</h1>
      <ExperienceAndTraining />
      <Footer />
    </div>
  );
}

export default About