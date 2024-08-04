"use client";
import React, { useState } from "react";
import styles from "./Menu.module.css";
import { motion } from "framer-motion";
import pic1 from "../../assets/food/pic2.jpg";
import pic2 from "../../assets/food/pic1.jpg";
import food3 from "../../assets/food/food3.jpeg";
import food4 from "../../assets/food/food4.webp";
import food5 from "../../assets/food/food5.jpeg";

const foodItems = [
  { image: pic1, title: "palater", description: "Delicious food item 1" },
  { image: pic2, title: "Idli vada", description: "Tasty food item 2" },
  { image: food3, title: "Butter roti", description: "Yummy food item 3" },
  { image: food4, title: "mixer", description: "Scrumptious food item 4" },
  { image: food5, title: "paddu", description: "Mouth-watering food item 5" },
  { image: pic1, title: "palater", description: "Delicious food item 1" },
  { image: pic2, title: "Idli vada", description: "Tasty food item 2" },
  { image: food3, title: "Butter roti", description: "Yummy food item 3" },
  { image: food4, title: "mixer", description: "Scrumptious food item 4" },
  { image: food5, title: "paddu", description: "Mouth-watering food item 5" },
];

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.itemsContainer}>
        {foodItems.map((item, index) => (
          <motion.div whileHover={{ scale: 1.3 }} key={index}>
            <motion.div
              key={index}
              className={styles.item}
              style={{ backgroundImage: `url(${item.image.src})` }}
              onClick={() => handleItemClick(item)}
            ></motion.div>
            <p style={{color:'green',fontFamily:'serif'}}>{item.title}</p>
          </motion.div>
        ))}
      </div>
      <div className={styles.itemsContainer}>
        {foodItems.map((item, index) => (
          <motion.div whileHover={{ scale: 1.3 }} key={index}>
          <motion.div
              key={index}
              className={styles.item}
              style={{ backgroundImage: `url(${item.image.src})` }}
              onClick={() => handleItemClick(item)}
            ></motion.div>
            <p style={{color:'green',fontFamily:'serif'}}>{item.title}</p>
          </motion.div>
        ))}
      </div>
      {selectedItem && (
        <div className={styles.description}>
          <p>{selectedItem.description}</p>
          <button onClick={() => setSelectedItem(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Menu;
