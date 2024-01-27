import React from 'react';
import './home.css';

import { Footer, Header, JoinUs, Navbar, OurProduct, Questions } from "../../components";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <OurProduct />
        <JoinUs />
        <Questions />
        <Footer />
      </div>
    </div>
  )
}

export default Home;
