import React from 'react';
import "./ai.css";

import { Navbar, Footer, Questions, OurProduct, JoinUs } from "../../../components";

const AI = () => {
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

export default AI;
