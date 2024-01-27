import React from 'react';
import { Footer, Navbar, JoinUs, Questions, } from "../../components";
import Birth from "./birth/Birth";
import Geng from "./geng/Geng";

import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div className='moodsync_about_wrapper'>
      <Navbar />
      <Birth />
      <Geng />
      <div className="homeContainer">
        <JoinUs />
        <Questions />
        <Footer />
      </div>
    </div>
  )
}

export default AboutUs;
