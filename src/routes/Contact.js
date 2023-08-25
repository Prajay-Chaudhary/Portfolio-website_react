import React from 'react'
import Navbar from '../Components/NavBar/Navbar';
import Footer from '../Components/Footer/Footer';
import HeroImg2 from '../Components/Home/HeroImg2';
import Form from '../Components/Contact/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Let's have a chat!." />
      <Form />
      <Footer />
    </div>
  );
}

export default Contact