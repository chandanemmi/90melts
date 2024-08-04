"use client";
import React, { useState } from "react";
import styles from "./ContactForm.module.css"; // Import your module styles
import Lottie from "lottie-react";
import foodTruck from "../../assets/lottie/foodTruck.json";
import { useRouter } from 'next/navigation'

const ContactForm = () => {
  const router=useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    router.push('/');
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Success:", data);
      // Clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.contactForm}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className={styles.right_section}>
        <Lottie
          animationData={foodTruck}
          loop={true}
          style={{ height: "100%", padding: 0, margin: 0 }}
        />
      </div>
    </div>
  );
};

export default ContactForm;
