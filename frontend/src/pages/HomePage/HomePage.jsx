import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [showHeading, setShowHeading] = useState(false);

  useEffect(() => {
    // Trigger heading transition after component mounts
    const timer = setTimeout(() => {
      setShowHeading(true);
    }, 100); // Small delay to ensure transition effect is visible

    return () => clearTimeout(timer); // Clean up timer if component unmounts
  }, []);

  return (
    <div className={`homepage ${showHeading ? 'show-heading' : ''}`}>
      <div className="navigate">
        <Link to="/mycv">My CV</Link>
        <Link to="/data_projects">Data Science Projects</Link>
        <Link to="/web_projects">Web Projects</Link>
        <Link to="/games">My Games</Link>
        <Link to="/about">My Journey</Link>
      </div>
      <section>
        <div className="main-heading-container">
          <h1 className="main-heading">HEY! WELCOME TO MY PAGE YOU WILL FIND SPECIAL THINGS HERE</h1>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
