import React from 'react';
import "./base.css";

import { Navbar, Footer, Questions, OurProduct, JoinUs } from "../../../components";

const Base = () => {
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

export default Base;
