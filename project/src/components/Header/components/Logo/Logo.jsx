import React from "react";

const Logo = ({ logo }) => {
  return (
    <div className="flex-fill">
      <a href="#">
        <img src={logo} alt="ChronoChic - Où l'Élégance Rencontre le Temps" />
      </a>
    </div>
  );
};

export default Logo;
