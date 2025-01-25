import React, { useState, useEffect } from 'react';
import { LiaWhatsapp } from "react-icons/lia";
import './Header.css';
import { NavLink,Link} from "react-router-dom"
const Header = () => {

  const [logoText, setLogoText] = useState("Book Your Ticket");

  useEffect(() => {
    const texts = ["Book Train Ticket", "Book Flight Ticket", "Book Vechicle Ticket"];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setLogoText(texts[index]);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
   
    <div className="header">
       {/* <Link to="/admin" className="admin-button">Admin</Link> */}
      <div className="logo">
        {logoText}
      </div>
      <div className="contact-info">
        <span className="icon-text">
          <i className="fab fa-whatsapp"></i> +91-XXXXXXXXXX
        </span>
        <span className="separator">|</span>
        <span className="icon-text">
          <i className="fas fa-envelope"></i> admin@example.com
        </span>
        <Link to="/admin" className="admin-button">Admin</Link> 
      </div>  
    </div>
  )
}

export default Header;
