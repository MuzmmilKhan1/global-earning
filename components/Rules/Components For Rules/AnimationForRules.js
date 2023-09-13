'use client'
import React from 'react'
import {motion} from 'framer-motion'
import styles from '../../../app/CSS/rule.module.css';

export default function AnimationForRules() {
  return (
        <motion.div
        className={`${styles.Animation}`}
      animate={{
        y: [-10, 10, -10], // The values represent the vertical position
      }}
      transition={{
        duration: 2, // Duration of the animation in seconds
        repeat: Infinity, // Repeat the animation indefinitely
        repeatType: 'reverse', // Reverse the animation on each repeat
      }}
    >
    <img src='/Images/rules/rule.png'></img>
    </motion.div>
  )
}
