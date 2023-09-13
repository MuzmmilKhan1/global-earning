import React from 'react'
import styles from "../../../app/CSS/pricing.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';


export default function PricingCards({Package, Tasks, PerReferal, Investment, WeeklyEarning}) {
  return (
    <Link href={"/Instructions"} className='col-md-4'>
    <div 
    className={` pb-5 mt-5  mb-5
    ${styles.card}`}>
        <img src='/Images/Pricing/pricing-element.png'></img>
      <span className={`${styles.PackageName}`}>{Package}</span>
      <h2 className={`${styles.Investment}`}> {Investment}</h2>
      <span>One Time Investment</span>
      {/* <hr className={`${styles.hr}`}></hr>
      <p className={`${styles.Tasks}`}>Tasks Before Referal: {Tasks}</p> */}
      <hr className={`${styles.hr}`}></hr>
      <p className={`${styles.PerReferal}`}>Per Referal: {PerReferal}</p>
      <hr className={`${styles.hr}`}></hr>

      <h5 className={`${styles.WeeklyEarning}`}>Earning: {WeeklyEarning}</h5>
      <hr></hr>
      <span style={{width: "80%", textAlign: "center", margin: "0 auto"}}>
      Alert: refral earning will start after completing 3 tasks
      </span>
    </div>
      </Link>
  )
}
