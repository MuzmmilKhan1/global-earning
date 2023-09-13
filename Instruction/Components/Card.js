import React from 'react'
import styles from '../../app/CSS/Instruction/Instruction.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Card({imageSrc ,Package, Tasks, PerReferal, Investment, WeeklyEarning, ScreenShot}) {
  return (
    <div 
    className={`
    p-5
    ${styles.card}`}>
        <img src={imageSrc}></img>
      <h3 className={`${styles.PackageName}`}>{Package}</h3>
      <p className={`${styles.PerReferal}`}>{PerReferal}</p>
      <hr></hr>
      <h3>{Tasks}</h3>
      <p>{Investment}</p>
      <p>{WeeklyEarning}</p>

      <i>{ScreenShot}</i>
    </div>
  )
}
