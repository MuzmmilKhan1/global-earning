import React from 'react'
import styles from "../../../app/CSS/banner.module.css"
import { motion } from 'framer-motion';

export default function ShootingStar() {
  return (
    <>
    <div >
    <img className={`${styles.star} ${styles.line1}`}
     src="/Images/banner/line1.png" alt="Line" />
  </div>
  <div >
    <img className={`${styles.star} ${styles.line2}`}
     src="/Images/banner/line2.png" alt="Line" />
  </div>
  <div >
    <img className={`${styles.star} ${styles.line3}`}
     src="/Images/banner/line3.png" alt="Line" />
  </div>
  <div >
    <img className={`${styles.star} ${styles.line4}`}
     src="/Images/banner/line4.png" alt="Line" />
  </div>
  <div >
    <img className={`${styles.star} ${styles.line5}`}
     src="/Images/banner/line5.png" alt="Line" />
  </div>
  <div >
    <img className={`${styles.star} ${styles.line6}`}
     src="/Images/banner/line6.png" alt="Line" />
  </div>
  <div >
    <img className={`${styles.star} ${styles.line7}`}
     src="/Images/banner/line7.png" alt="Line" />
  </div>
  <div >
    <img className={`${styles.star} ${styles.manyline}`}
     src="/Images/banner/manyline.png" alt="Line" />
  </div>
</>

  )
}
