import React, { Fragment, useState} from 'react';
import './Header.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from '../Reducers/theme';
import { useEffect } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  let darkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect((e) => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', darkMode);
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', darkMode);
    }
  }, [darkMode]);

  return (
    <Fragment>
      <div className="Top">
        <img className={darkMode ? "phone-dark" : "phone"} src='https://cdn-icons-png.freepik.com/256/455/455705.png?semt=ais_hybrid' alt='phone' />
        <div className={darkMode ? "contact-info-dark" : "contact-info"}>
          <span>+91 7255964983</span>
        </div>
        <div className={darkMode ? "social-icons-dark" : "social-icons"}>
          <a href="https://www.facebook.com/manish.kumar.547" target='_blank'><FaFacebook /></a>
          <a href="https://www.facebook.com/manish.kumar.547" target='_blank'><FaInstagramSquare /></a>
          <a href="https://www.facebook.com/manish.kumar.547" target='_blank'><FaSquareXTwitter /></a>
        </div>
      </div>
        <header className={darkMode ? "header-dark" : "header"}>
          <nav>
            <ul>
              <li><img src='' alt='Logo'></img></li>
              <button onClick={() => dispatch(toggleTheme())}><img src='https://static-00.iconduck.com/assets.00/dark-theme-icon-512x512-185rlszm.png' alt='Theme'></img></button>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Services</a></li>
              <li><a>Contact Us</a></li>
              <button style={{backgroundColor: 'transparent', border: 'none',marginRight: '10px', maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}><img src='/user.png' alt='Admin'></img></button>
            </ul>
          </nav>
        </header>
    </Fragment>
  );
};

export default Header;