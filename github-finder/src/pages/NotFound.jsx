import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-9xl font-bold mb-8">404</h1>
          <p className="text-4xl mb-8">
            The page you are looking for does not exist!
          </p>
          <Link className="btn btn-primary btn-lg" to="/">
            <FaHome className="mr-2" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
