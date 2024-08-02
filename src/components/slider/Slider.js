// Slider.js or Slider.jsx
"use client";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "./Images";
import t1 from "../../../public/truck/t1.JPG";
import t2 from "../../../public/truck/t2.JPG";
import t3 from "../../../public/truck/t3.JPG";
import t4 from "../../../public/truck/t4.JPG";
import t5 from "../../../public/truck/t5.JPG";
import styles from "./Slider.module.css";
import Image from "next/image";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const Slider = () => {
  const images = [t1, t2, t3, t4, t5];
  const [[page, direction], setPage] = useState([0, 0]);
  console.log(t1.src);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) =>
    setPage([page + newDirection, newDirection]);

  return (
    <div className={styles.container}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className={styles.img}
          key={page}
          src={images[imageIndex].src}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) paginate(1);
            else if (swipe > swipeConfidenceThreshold) paginate(-1);
          }}
        />
      </AnimatePresence>
      <div className={styles.next} onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className={styles.prev} onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </div>
  );
};

export default Slider;
