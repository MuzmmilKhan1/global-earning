import React from 'react'
import styles from "../../../app/CSS/about.module.css"

export default function Shootingstar() {
  return (
    <>
    <div >
    <img className={`${styles.star} ${styles.line1}`}
     src="/Images/about/star-1.png" alt="Line" />
  </div>
  <div >
    <img className={`${styles.star} ${styles.line2}`}
     src="/Images/about/star-2.png" alt="Line" />
  </div>
  <div >
    <img className={`${styles.star} ${styles.line3}`}
     src="/Images/about/star-3.png" alt="Line" />
  </div>
  <div >
    <img className={`${styles.star} ${styles.line6}`}
     src="/Images/about/star-6.png" alt="Line" />
  </div>
  <div >
    <img className={`${styles.star} ${styles.line7}`}
     src="/Images/about/star-5.png" alt="Line" />
  </div>
  <div >
    <img className={`${styles.star} ${styles.manyline}`}
     src="/Images/about/star-4.png" alt="Line" />
  </div>
</>

  )
}
