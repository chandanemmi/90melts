'use client'
import React, { useState } from "react";
import styles from "./Menu.module.css";
import { motion } from "framer-motion";
import pic1 from '../../../public/assets/pic1.jpeg';
import pic2 from '../../../public/assets/pic2.jpeg';
import food3 from '../../../public/assets/pic3.jpeg';
import food4 from '../../../public/assets/pic4.jpeg';
import food5 from '../../../public/assets/pic5.jpeg';

const foodItems = [
  { image: pic1, title:'palater', description: "Delicious food item 1" },
  { image: pic2, title:"Idli vada", description: "Tasty food item 2" },
  { image: food3, title:'Butter roti',description: "Yummy food item 3" },
  { image: food4, title:'mixer',description: "Scrumptious food item 4" },
  { image: food5, title:'paddu', description: "Mouth-watering food item 5" },
  { image: pic1, title:'palater', description: "Delicious food item 1" },
  { image: pic2, title:"Idli vada", description: "Tasty food item 2" },
  { image: food3, title:'Butter roti',description: "Yummy food item 3" },
  { image: food4, title:'mixer',description: "Scrumptious food item 4" },
  { image: food5, title:'paddu', description: "Mouth-watering food item 5" },
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
          <>
          <motion.div
            key={index}
            className={styles.item}
            style={{ backgroundImage: `url(${item.image.src})` }}
            whileHover={{ scale: 1.3 }}
            onClick={() => handleItemClick(item)}
          >
          </motion.div>
          <p>{item.title}</p>
          </>
        ))}
      </div>
      <div className={styles.itemsContainer}>
        {foodItems.map((item, index) => (
           <>
          <motion.div
            key={index}
            className={styles.item}
            style={{ backgroundImage: `url(${item.image.src})` }}
            whileHover={{ scale: 1.3 }}
            onClick={() => handleItemClick(item)}
          >
        
          </motion.div>
             <p>{item.title}</p>
            </>
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
