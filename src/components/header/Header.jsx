import React from 'react';
import { AiFillApple } from "react-icons/ai";
import { AiFillAndroid } from "react-icons/ai";

import './header.css';

const Header = () => {
  return (
    <div className="hero">
      <div className="hero_content">
        <h1 className="animate-hero">Play your music <br/> on the go</h1>
        <p className="hero_P animate-hero">Join Moodsync today and experience the future of music.</p>
        <p className="hero_P animation-hero">
          Elevate your music experience with Moodsync
        </p>
        <div className="available_button">
          <button className="headerBtn create animate-hero">
            Create an account
          </button>
        </div>
        <p className="available animation-hero">Available on</p>
        <div className="available_button">
          <button className="headerBtn app animate-hero">
            <div className="app_icon"><AiFillApple/></div>
            App Store
          </button>
          <button className="headerBtn play animate-hero">
            <div className="app_icon"><AiFillAndroid/></div>
            Play Store
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header;
