import React from 'react'
import { motion } from "framer-motion";
import styles from "../../../app/CSS/banner.module.css"
import Link from 'next/link';

export default function Contents() {
  return (
    <div className={`${styles.content}`}>
        <div className={`${styles.contentDiv}`}>
        <h2 className={`${styles.title}`}>
        Start earning with global Assignment
        </h2>
        <span className={`${styles.span}`}>
        One Low Monthly Price.Cancel Anytime.
        </span>
        <Link href={'/Instructions'} className={`${styles.joinUsButton} ${styles.joinUsButtonContent}`}>Start Earning</Link>
        </div>
        <motion.div
      whileHover={{ rotate: 360 }}
      transition={{
          duration: 2,
          ease: "easeInOut",
    }}
      className={`${styles.contentDivPlay}`}
    >
        <img src='/Images/banner/play.png'></img>
    </motion.div>
    </div>
  )
}
