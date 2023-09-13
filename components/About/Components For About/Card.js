import React from 'react'
import styles from '../../../app/CSS/about.module.css'
import { motion } from 'framer-motion'

export default function Card({h1, image, para}) {
  const Animation1 = {
    initial: { x: '100%',y: '100%' },
    animate: { x: "0%", y: "0%" },
  }
  const Animation2 = {
    initial: { x: '-100%',y: '-100%' },
    animate: { x: "0%", y: "0%" },
  }

  return (
    // Card
    <motion.div
  className={styles.card}
  initial="initial"
  animate="initial"
  whileHover="animate"
>

    {/* <div className={`${styles.card}`}> */}
      {/* Contents of Card */}
      <div className={`${styles.cardContent}`}>
        {/* Image of Card */}
      <div className={`${styles.cardImageDiv}`}>
      <img className={`${styles.cardContentImage}`} src={image}></img>
      </ div>

      <div className={`${styles.cardContent}`}>
        {/* Heading */}
      <h4 className={`${styles.cardContentTitle}`}>{h1}</h4>

        {/* Paragraph */}
      <p className={`${styles.cardContentPara}`}>{para}</p>
      </div>
      
      </div>

      <motion.div
    className={styles.cardAnimation1}
    variants={Animation1}
    transition={{ duration: 1 }}
  ></motion.div>

  {/* Second Animation Box */}
  <motion.div
    className={styles.cardAnimation2}
    variants={Animation2}
    transition={{ duration: 1 }}
    ></motion.div>
    {/* </div> */}
    </motion.div>
  )
}
