import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Profile Finder</h1>
      <h2 className="text-3xl mb-4">
        <a href="https://github.com/Jackimaru96">Jack</a> - Frontend developer
        trying to learn more about React
      </h2>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details. This
        project is part of the
        <a href="https://www.udemy.com/course/modern-react-front-to-back/">
          {" "}
          React Front To Back
        </a>{" "}
        Udemy course by
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          Hassib Moddasser
        </a>
      </p>
    </div>
  );
};

export default About;
