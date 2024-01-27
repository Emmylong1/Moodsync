import React from 'react';
import moodsync from "../../../assets/moodsync3.png";
import "./birth.css";

const Birth = () => {
  return (
    <div className='about_birth_section'>
      <div className="about_top"></div>
      <div className="birth">
        <h1>Moodsync Was Born!</h1>
        <p>
          The founders of Myaza were passionate about finding innovative solutions to common financial problems. They saw firsthand how traditional financial systems could be slow, expensive, and inconvenient for users, and they knew there had to be a better way.
        </p>
        <p>
          After many months of hard work and collaboration, the Myaza platform was born. With a focus on free money transfers, no-fee currency exchange, and various other convenient features, Myaza was designed to make financial management simple and accessible for everyone.
        </p>
      </div>
      <div className="about_content">
        <div className="about_content_left">
          <div className="we">
            <h2>We are who we are</h2>
            <p>
              Moodsync is not just a player it's a passion for music brought to life. We believe that music transcends boundaries, speaks to the soul, and has the power to evoke emotions like nothing else. With  this beliefat our core, we set out create an audio player tha's more than just a tool. It's a portal to a world of melodies, rhythm, and harmonies.
            </p>
          </div>
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              Is to inspire and enhance the world's audio experience by providing a platform that celebrates the beauty of music, empowers artist, and connects listeners with the rhythm of life.
            </p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              Is to be a global leader in audio leader in audio entertainment, a brand synonymous with exceptional sound quality, seamless user experience, and an unwavering dedication to the artistry of music.
            </p>
          </div>
        </div>
        <div className="about_content_right">
          <img src={moodsync} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Birth;
