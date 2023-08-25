import React from "react";
import Navbar from "../Components/NavBar/Navbar";
import Footer from "../Components/Footer/Footer";
import HeroImg2 from "../Components/Home/HeroImg2";
import Work from "../Components/Projects/Work";

const project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="The Projects i have  made recently." />
      <Work />
      <Footer />
    </div>
  );
};

export default project;
