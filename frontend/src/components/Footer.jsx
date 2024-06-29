// src/Footer.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './footer.css';

const Footer = () => {
    const containerStyle = {
        width: '100%',
        height: '300px'
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
                <h4>Contact Us</h4>
                <p>Email: company@example.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
            <div className="footer-section">
                <h4>Company</h4>
                <p>Name: XYZ Company</p>
                <p>Address: 123 Street Name, City, Country</p>
            </div>
            <div className="footer-section">
                <h4>Legal</h4>
                <p><a href="/license">License Policy</a></p>
                <p><a href="/terms">Terms and Conditions</a></p>
            </div>
            <div className="footer-section">
                <h4>Our Location</h4>
                <LoadScript
                    googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </footer>
    );
}

export default Footer;