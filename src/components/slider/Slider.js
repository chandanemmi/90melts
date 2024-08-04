// Slider.js or Slider.jsx
"use client";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import t1 from "../../../public/truck/t1.JPG";
import t2 from "../../../public/truck/t2.JPG";
import t3 from "../../../public/truck/t3.JPG";
import t4 from "../../../public/truck/t4.JPG";
import t5 from "../../../public/truck/t5.JPG";
import styles from "./Slider.module.css";
import PageOne from "../pages/PageOne";
import PageSecond from "../pages/PageSecond";

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
  const images = [t1, t2];
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = () => {
    console.log("paginate:", page);
    if (page == 1) setPage([0]);
    else if (page == 0) setPage([1]);
  };
  return (
    <div className={styles.container}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          className={styles.imgContainer}
          key={page}
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
        >
          {page === 0 ? (
            <div className={styles.main_page}>
              <PageOne />{" "}
            </div>
          ) : (
            <div className={styles.main_page}>
              <PageSecond />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      <div className={styles.next} onClick={() => paginate()}>
        {"‣"}
      </div>
      <div className={styles.prev} onClick={() => paginate()}>
        {"‣"}
      </div>
    </div>
  );
};

export default Slider;
