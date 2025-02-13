import React, { useEffect, useState } from "react";
import "./styles.css";
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
        <Link to="/mycv">About me</Link>
        <Link to="/data_projects">My Data Science Projects</Link>
        <Link to="/web_projects">My Web Projects</Link>
      </div>
      <section>
        <div className="main-heading-container">
          <h1 className="main-heading">HEY! WELCOME TO MY PAGE</h1>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
