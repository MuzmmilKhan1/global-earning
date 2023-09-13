'use client'
import React from 'react'
import styles from "../../../app/CSS/banner.module.css"
import { Facebook, Instagram, Whatsapp, Twitter } from 'react-bootstrap-icons'
import FixedNavbar from './FixedNavbar'
import Link from 'next/link';

export default function Navbar() {
  return (
    // Navbar
    <div>
        {/* Socials */}
       <div className={`${styles.InitialNavBar}`}>
        {/* Logo */}
        <div>
            <img src='/Images/banner/logoToBeUsed.png' className={`${styles.logo}`}></img>
        </div>
        {/* Socials */}
        <div className={`${styles.Socials}`}>
            <Facebook className={`${styles.NavIcon}`}></Facebook>
            <Instagram  className={`${styles.NavIcon}`} style={{color:"white",fontSize: "1.3rem",padding: "0 3px"}}></Instagram>
            <Whatsapp  className={`${styles.NavIcon}`} style={{color:"white",fontSize: "1.3rem",padding: "0 3px"}}></Whatsapp>
            <Twitter  className={`${styles.NavIcon}`} style={{color:"white",fontSize: "1.3rem",padding: "0 3px"}}></Twitter>
         {/* Join Us Button */}
         <div>
            <Link href={"/Instructions"} className={`${styles.joinUsButton}`}>Join Us</Link>
         </div>
        </div>
        </div> 
       {/* Actual  Navbar */}
       <div className={`${styles.FixedNavbar}`}>
        <FixedNavbar></FixedNavbar>
        </div> 
    </div>
  )
}
