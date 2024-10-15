import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './ApiLinks.css'; // Import your CSS file

function ApiLinks() {
  return (
    <div className="api-links-container">
      <Link to="/api/details" className="api-link-button">
         Train Details
      </Link>
      <Link to="/api/details_car" className="api-link-button">
        Car Details
      </Link>
    </div>
  );
}

export default ApiLinks;