import React, { useState } from 'react';
import { 
  RiMenu3Line, 
  RiCloseLine 
} from 'react-icons/ri';
import { 
  TiArrowSortedDown, 
  TiArrowSortedUp 
} from "react-icons/ti";

import './navbar.css';

const Menu = () => (
  <>
    <p><a href='/about'>About Us</a></p>
    <p><a href='/faqs'>FAQs</a></p>
    <p><a href='/blog'>Our Blog</a></p>
  </>
)

const MenuProducts = () => (
  <div className="products">
    <div className='our'>
      <p>Our Products</p>
    </div>
    <div className="product">
      <div>
        <p><a href="/products/ai">Mood Detection</a></p>
        <p><a href="/products/ai">It's AI base</a></p>
      </div>
      <div>
        <p><a href="/products/base">Music Theapy</a></p>
        <p><a href="/products/base">Your therapy is here</a></p>
      </div>
    </div>
    <div className="product">
      <div>
        <p><a href="/products/detection">Mood Detection</a></p>
        <p><a href="/products/detection">It's AI base</a></p>
      </div>
      <div>
        <p><a href="/products/mood">Music Theapy</a></p>
        <p><a href="/products/mood">Your therapy is here</a></p>
      </div>
    </div>
  </div>
)

const Products = () => (
  <div className='product_column'>
    <p><a href="/products/mood">Mood Detection</a></p>
    <p><a href="/products/ai">It's AI base</a></p>
    <p><a href="/products/detection">Mood Detection</a></p>
    <p><a href="/products/base">It's AI base</a></p>
  </div>

)

const Navbar = () => {
  const [toggleProduct, setToggleProduct] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <h3><a href="/">Moodsync</a></h3>
        </div>
        <div className="navbar-links_container">
        <div className="nav_Product">
          {toggleProduct
            ?<span onMouseEnter={() => setToggleProduct(false)}>
                <p>Our Products</p>
                <div className='span_product'><TiArrowSortedUp /></div>
              </span>
            : <span onMouseEnter={() => setToggleProduct(true)}>
                <p>Our Products</p>
                <div className='span_product'><TiArrowSortedDown /></div>
              </span>
          }
          {toggleProduct && (
            <MenuProducts />
          )}
        </div>
        <Menu />
        </div>
        <div className="navbar-sign">
          <p>Login</p>
          <button type="button">Create an account</button>
        </div>
      </div>
      
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#Fe0037" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#Fe0037" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <div className="navbar-menu_container-links-product">
                {toggleProduct
                  ?<span onClick={() => setToggleProduct(false)}>
                      <p>Our Products</p>
                      <div className='span_product'><TiArrowSortedUp /></div>
                    </span>
                  : <span onClick={() => setToggleProduct(true)}>
                      <p>Our Products</p>
                      <div className='span_product'><TiArrowSortedDown /></div>
                    </span>
                }
                {toggleProduct && (
                  <Products />
                )}
              </div>
              <Menu />
              <div className="navbar-menu_container-links-sign">
                <p>Login</p>
                <button type="button">Create an account</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;