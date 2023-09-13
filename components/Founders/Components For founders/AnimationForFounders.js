'use client'
import React from 'react'
import { motion } from 'framer-motion';
import styles from "../../../app/CSS/founders.module.css";

export default function AnimationForFounders() {
  return (
    <div>
        <motion.div
      animate={{ y: [10, -10, 10] }} // You can adjust the values to control the range of motion
      transition={{
        duration: 3, // Adjust the duration to control the speed
        repeat: Infinity, // Keeps the animation looping
        repeatType: 'reverse', // Reverses the animation direction at the end of each iteration
        ease: 'linear', // Linear easing for a smooth up-and-down motion
      }}
    >
        <img src='/Images/founders/circle.png' className={`${styles.AnimationImage}`}></img>
    </motion.div>
    </div>
  )
}
