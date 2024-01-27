import React from 'react';
import { AiFillInstagram, AiFillLinkedin, AiOutlineTwitter, AiOutlineFacebook } from "react-icons/ai";
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="first_footer">
        <div className="about">
          <div className="footer_logo">
            <h3><a href="#home">Moodsync</a></h3>
            <p>
              Moodsync offers a reliable way to play and stream music from any part of the world. We eliminate the risks and hiccups associated with online streaming by delivering a cheap, quick, and secure portal for streaming music.
            </p>
          </div>
          <span className='mood'>2023 © Moodsync</span>
        </div>
        <div className="ourProduct">
          <h3>Our Product</h3>
          <p><a href="#virtualCards">Virtual Cards</a></p>
          <p><a href="#swapCurrency">Swap Currency</a></p>
          <p><a href="#transferFunds">Transfer Funds</a></p>
          <p><a href="#multipleWallets">Multiple Wallets</a></p>
        </div>
        <div className="Company">
          <h3>Company</h3>
          <p><a href="#about">About</a></p>
          <p><a href="#faq">FAQ</a></p>
          <p><a href="#ourBlog">Our Blog</a></p>
        </div>
        <div className="Address">
          <div className="Contact">
            <div className="">
              <h3>Contact</h3>
              <p><a href="#email">support@moodsync.co</a></p>
            </div>
            <div className="">
            <h3>Nigeria</h3>
              <p><a href="/">Victoria Crest Estate II, Lekki Penninsula II 101244, Lekki, Lagos.</a></p>
              <h3>USA</h3>
              <p><a href="/">2561, 1007 N Orange St. 4th Floor Wilmington, DE 19801.</a></p>
            </div>
          </div>
          <div class="footer_links">
            <h3 class="footer_title">Social Media</h3>
            <button><a href="#twitter"><AiOutlineTwitter /></a></button>
            <button><a href="#linkedin"><AiFillLinkedin /></a></button>
            <button><a href="#instagram"><AiFillInstagram /></a></button>
            <button><a href="#facebook"><AiOutlineFacebook /></a></button>
          </div> 
          <div className="Terms">
            <p><a href="#privacy">privacy Policy</a></p>
            <p><a href="#terms">Terms of Use</a></p>
            <p><a href="#accept">Acceptable Use Policy</a></p>
          </div>
        </div>
      </div> <hr />
      <div className="second_footer">
        <p>
          Moodsync services are provided by <a href="https://flitstack.com">FlitStack</a> LTD. <a href="https://flitstack.com">FlitStack</a> is a Financial Technology company. FlitStack offers its products and services in partnership with licensed transmitters in their respective jurisdictions. Copyright ©️ Moodsync. 2023
        </p>
        <p>
          
        </p>
      </div>
    </div>
  )
}

export default Footer;
