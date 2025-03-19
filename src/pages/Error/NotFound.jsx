import React from 'react';
import './notFoud.css';

const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-code">404</h1>
      <h2 className="notfound-title">Page Not Found</h2>
      <p className="notfound-text">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>
      <a href="/" className="notfound-btn">Go back Home</a>
    </div>
  );
};

export default NotFoundPage;
