// components/Footer.js
"use client";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.socials}>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
      {/* <div className={styles.credit}>Created by KbChandan</div> */}
      <div className={styles.credit}>Created by KbChandan</div>
    </div>
  );
};

export default Footer;
