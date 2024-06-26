import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div
      className={`${styles.footer} d-flex flex-row justify-content-center align-items-center p-20`}
    >
      © 2024 Tous droits réservés. <span className="ml-10">Conçu avec passion par ChronoChic</span>
    </div>
  );
};

export default Footer;
