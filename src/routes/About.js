import React from 'react'
import Navbar from '../Components/NavBar/Navbar';
import Footer from '../Components/Footer/Footer';
import HeroImg2 from '../Components/Home/HeroImg2'
import AboutContent from '../Components/About/AboutContent';
import ExperienceAndTraining from '../Components/About/ExperienceAndTraining';
import Skills from '../Components/About/Skills'
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