import React from 'react';
import { Footer, Navbar, JoinUs, Questions, } from "../../components";

import "./ourBlog.css";

const OurBlog = () => {
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

export default OurBlog;
