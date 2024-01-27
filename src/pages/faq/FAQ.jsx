import React from 'react';
import { Footer, Navbar, JoinUs, Questions, } from "../../components";

import "./faq.css";

const FAQ = () => {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <div className="homeContainer">
        <JoinUs />
        <Questions />
        <Footer />
      </div>
    </div>
  )
}

export default FAQ;
