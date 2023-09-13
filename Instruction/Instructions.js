import Navbar from '@/components/Home/home-Components/Navbar'
import React from 'react'
import Card from './Components/Card'
import Footer from '@/components/Contact/Components/Footer'
import styles from '../app/CSS/Instruction/Instruction.module.css'
import Link from 'next/link'

export default function Instructions() {
  return (
    <div className={`container-fluid ${styles.body}`}>
        <Navbar></Navbar>
        {/* Image Container */}
        <div>
            <img></img>
        </div>

         {/* Cards */}
        <div className='row'>
          <h4>Steps</h4>
          <h1 className=''>You Must Follow</h1>
            <Card imageSrc={'/Images/Instructions/planning.png'} Package={"Choosing your Plan"}
      PerReferal={"Choose the plan the suit you the best and feel free to reach out to use for Any kind of assistance."}></Card>
            <Card imageSrc={'/Images/Instructions/SendMoney.png'} Package={"Invest For yourself"}
      PerReferal={"Remember your today's Investments is your Towmorrow's Best Friend"}
      Tasks={"Easypaisa"} Investment={'Mobile No: 03426324153'} WeeklyEarning={'Account Name: Chaudary Awais Israr'} ScreenShot={"Please don't forget to take a screenshot."}></Card>
            <Card imageSrc={'/Images/Instructions/StartEarning.png'} Package={"Start Your Journey"}
             PerReferal={'After that you will need to fill and a form and send us the proof of payment (A screenshot from Previous step) to kick start your journey'}></Card>
        </div>
        <div className={`${styles.ButtonDiv}`}>
          <Link href={"/"} className={`${styles.PrevButton} ${styles.Button}`}>Previous Step</Link>
          <Link href={"/Registration"} className={`${styles.NextButton} ${styles.Button}`}>Next Step</Link>
        </div>
        <Footer></Footer>
    </div>
  )
}
