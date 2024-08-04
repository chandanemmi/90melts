import * as React from "react";
import styles from "./PageOne.module.css";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Lottie from "lottie-react";
import animationData from "../../../public/lottie/foodLogo.json";
import foodTruck from "../../../public/lottie/foodTruck.json";

const PageSecond = () => {
  return (
    <div className={styles.page_one}>
      <div className={styles.imageContainer}>
        {/* <Image src={logo} alt="logo" width={80} height={80} className={styles.image}/> */}
        <Lottie
          animationData={foodTruck}
          loop={true}
          style={{ padding: 0, margin: 0 }}
        />
      </div>
      <div className={styles.content}>
        <h1 style={{ marginBottom: "20px", color: "yellowgreen" }}>
          90's Melts
        </h1>
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "16px",
            lineHeight: "23px",
          }}
        >
          At 90's Melts, we're not just serving food we're crafting an urban
          culinary adventure where every bite tells a story and let your taste
          buds savor the extraordinary flavors that our roaming kitchen brings
          to your city. Join us at "90's Melts" and let our food truck be your
          time-traveling dining companion. Whether you're reliving the tastes of
          your youth or discovering the flavors that defined a generation, our
          melts are a delicious chapter in your own 90s-inspired story. Welcome
          aboard for a journey where nostalgia meets innovation, and every
          ingredient whispers tales of the past.
        </p>
      </div>
    </div>
  );
};

export default PageSecond;
