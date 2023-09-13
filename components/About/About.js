'use client'
import React from 'react'
import styles from '../../app/CSS/about.module.css'
import AnimationForAbout from './Components For About/AnimationForAbout'
import Card from './Components For About/Card'
import Content from './Components For About/Content'

export default function About() {
  return (
    <div className={`${styles.About}`} id='about'>
        <AnimationForAbout className={`${styles.AnimationForAbout}`}></AnimationForAbout>
        <div className={`${styles.CardSection}`}>
          <div className={`${styles.CardSectionFlex}`}>

        <Card h1="Effort is the Key" 
        image={"/Images/about/about-4.png"}
         para={"Your potential income is directly linked to the tasks you successfully complete. The more you accomplish, the more you earn."}></Card>


        <Card h1="Weekly Payouts" 
        image={"/Images/about/about-1.png"}
         para={"Every week, the tasks you complete contribute to your overall earnings. Consistency is key to boosting your income."}></Card>
        </div>
        <div className={`${styles.CardSectionFlex}`}>

        <Card h1="Tailored Packages" 
        image={"/Images/about/about-3.png"}
        para={"Choose from a variety of packages that align with your preferences and capabilities. Find the one that suits you best."}></Card>

        <Card h1="Convenient Payment" 
        image={"/Images/about/about-2.png"}
        para={"Receive your hard-earned money via hassle-free options like Easypaisa or jazcash. Get paid in a way that suits you."}></Card>
        </div>
        </div>
        <div className={`${styles.Content}`}>
        <Content></Content>
        </div>
    </div>
  )
}
