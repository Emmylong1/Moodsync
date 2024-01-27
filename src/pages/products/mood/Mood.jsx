import React from 'react';
import "./mood.css";

import { Navbar, Footer, Questions, OurProduct, JoinUs } from "../../../components";

const Mood = () => {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <OurProduct />
        <JoinUs />
        <Questions />
        <Footer />
      </div>
    </div>
  )
}

export default Mood;
