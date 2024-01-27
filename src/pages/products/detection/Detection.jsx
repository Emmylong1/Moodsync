import React from 'react';
import "./detection.css";

import { Navbar, Footer, Questions, OurProduct, JoinUs } from "../../../components";

const Detection = () => {
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

export default Detection;
