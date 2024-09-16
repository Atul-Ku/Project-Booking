// src/Footer.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './footer.css';
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    const containerStyle = {
        width: '100%',
        height: '250px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>About Us</h4>
                <p>We are a company that does XYZ...</p>
            </div>
            <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Follow Us</h4>
                <a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a>
                <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/"><i class="fab fa-linkedin"></i></a>
            </div>
            <div className="footer-section">
                <h4>Contact Us</h4>
                <p>Email: company@example.com</p>
                <p>Phone: <FaPhoneAlt/> +91 7255964983 </p>
            </div>
        </footer>
    );
}

export default Footer;