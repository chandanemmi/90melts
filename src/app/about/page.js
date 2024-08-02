'use client'
import React from 'react';
import Head from 'next/head';
import styles from './About.module.css';
import Lottie from 'lottie-react';
import animationData from "../../../public/lottie/foodLogo";

const About = () => {
  return (
    <div className={styles.container}>

      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about our company" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About Us</h1>

        <section className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver high-quality products that make the world a better place.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Our Values</h2>
          <p>
            Integrity, innovation, and excellence are at the core of everything we do.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Our Team</h2>
          <p>
            We have a diverse and talented team committed to achieving our mission and values.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Our History</h2>
          <p>
            Since our founding in 2010, we've been at the forefront of technological advancements.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
