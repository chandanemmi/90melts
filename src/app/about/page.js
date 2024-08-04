"use client";
import React from "react";
import Head from "next/head";
import styles from "./About.module.css";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/animation.json";

const About = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our company" />
      </Head>

      <main className={styles.main}>
        <h4 className={styles.title}>About Us</h4>

        <section className={styles.section}>
          <p className={styles.about}>
            90s Melts was born out of a shared love for both delicious food and
            the unforgettable decade of the 1990s. Our founders, We grew up
            during this vibrant time, filled with fond memories of the simple,
            comforting foods that defined their childhood. Inspired by these
            memories, they decided to combine their passion for cooking with
            their nostalgia for the '90s, and thus, 90s Melts was born. From the
            very beginning, our goal was to create a unique food truck
            experience that celebrates the best of the '90s. We wanted to
            capture the essence of the decade, from its bold flavors to its fun,
            laid-back vibe. Every melt we create is a tribute to this incredible
            time, made with high-quality ingredients and a lot of creativity.
          </p>
        </section>

        <section className={styles.section}>
          <h4>The First Step :</h4>
          <p>
            We started with a regular, everyday van that had seen better days
            but was full of potential. With a lot of hard work, creativity, and
            a bit of elbow grease, we transformed that ordinary van into what is
            now the 90s Melts food truck.
          </p>
          <p>
            The process was both challenging and exhilarating. We stripped the
            vehicle down and rebuilt it from the ground up, installing a
            state-of-the-art kitchen complete with grills, ovens, and all the
            equipment needed to create our delicious melts, chicken shawarma,
            and grilled chicken. Each element of the truck was designed to bring
            our vision to life, from the vibrant '90s-inspired exterior to the
            efficient and functional interior.
          </p>
        </section>

        <section className={styles.section}>
          <h4>Learning the craft :</h4>
          <p>
            The first step of ours was simple yet significant: creating the
            perfect shawarma roll, chicken barbecue. But we didn’t stop there.
            We started experimenting with different sauces, fillings, paneer and
            a variety of menu items aiming to create melts that were not only
            delicious but also evoked a sense of nostalgia. Through trial and
            error, we developed a menu that we are incredibly proud of—one that
            celebrates the Flavors and fun of the '90s.
          </p>
        </section>

        <section className={styles.section}>
          <h4>Riding the wave:</h4>
          <p>
            From this humble beginning, our food truck quickly gained a
            following. People loved our unique take on classic comfort foods,
            and word began to spread. What started as a passion project has now
            grown into a beloved community staple, bringing joy and delicious
            memories to everyone we serve.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
