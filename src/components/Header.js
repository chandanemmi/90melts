// Header.jsx
"use client";
import React from "react";
import styles from "./Header.module.css";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/animation.json";
import about from "../assets/lottie/about.json";
import menu from "../assets/lottie/menu.json";
import foodTruck from "../assets/lottie/foodTruck.json"
import contact from "../assets/lottie/contact.json";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* <a href="/">99 melts: Enjoy your food</a> */}

        <a href="/">
          <div
            // style={{
            //   display: "flex",
            //   flexDirection: "row",
            //   justifyContent: "center",
            //   alignItems: "center",
            // }}
          >
            {/* <Image src={logo} alt="logo" width={200} height={200} /> */}
            <Lottie
              animationData={animationData}
              loop={true}
              style={{ height: "300px", width: "300px", padding: 0, margin: 0 }}
            />
          </div>
        </a>
      </div>
      <div className={styles.menu}>
        <div className={styles.outercirlce}>
          <div className={styles.circle}>
            <a href="/about">
              <Lottie
                animationData={about}
                loop={true}
                style={{ height: "100px", width: "100px" }}
              ></Lottie>
            </a>
            {/* <div className={styles.menuOptions}>
              <a href="/about">click me</a>
            </div> */}
          </div>
        </div>
        <div className={styles.outercirlce}>
          <a href="/menu">
            <div className={styles.circle}>
              <span>
                <Lottie
                  animationData={menu}
                  loop={true}
                  style={{ width: "100%" }}
                />
              </span>
              <div className={styles.menuOptions}>Menu</div>
            </div>
          </a>
        </div>
        <div className={styles.outercirlce}>
          <div className={styles.circle}>
            <a href="/contact">
              <Lottie
                animationData={contact}
                loop={true}
                style={{
                  height: "250px",
                  width: "250px",
                  padding: 0,
                  margin: 0,
                }}
              />
            </a>
            {/* <div className={styles.menuOptions}>
              <a href="/contact">Contact</a>
            </div> */}
          </div>
        </div>
      </div>
      <div className={styles.mobileMenu}>
        <div>
          <div className={styles.menu_main}>
            <div>
              <a href={`/menu`}>
                {" "}
                <Lottie
                  animationData={menu}
                  loop={true}
                  style={{ height: "50px", width: "50px" }}
                />{" "}
              </a>
            </div>
            <div>
              <a href={`/about`}>
                <Lottie
                  animationData={about}
                  loop={true}
                  style={{ height: "50px", width: "50px" }}
                ></Lottie>
              </a>{" "}
            </div>
            <div>
              <a href={`/contact`}>
                <div className={styles.circle}>
                  <Lottie
                    animationData={contact}
                    loop={true}
                    style={{ height: "50px", width: "50px" }}
                  />
                </div>
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
