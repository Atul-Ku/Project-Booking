import React, { useState, useEffect } from 'react';
import { LiaWhatsapp } from "react-icons/lia";
import './Header.css';

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
      <div className="logo">
        {logoText}
      </div>
      <div className="contact-info">
        <span class="icon-text">
          <i class="fab fa-whatsapp"></i> +91-XXXXXXXXXX
        </span>
        <span class="separator">|</span>
        <span class="icon-text">
          <i class="fas fa-envelope"></i> admin@example.com
        </span>
      </div>
    </div>
  )
}

export default Header;
