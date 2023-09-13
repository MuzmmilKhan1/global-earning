import React from 'react'
import styles from "../../../app/CSS/Contact.module.css"
import { Facebook, Instagram, Whatsapp, Twitter } from 'react-bootstrap-icons'

export default function 
() {
  return (
    // Navbar
    <div className={`${styles.Footer}`}>
        {/* Socials */}
       <div className={`${styles.InitialNavBar}`}>
        {/* Logo */}
        <div>
            <img src='/Images/banner/logoToBeUsed.png' width={'120px'}></img>
        </div>
        {/* Socials */}
        <div className={`${styles.Socials}`}>
            <Facebook className={`${styles.NavIcon}`}  style={{color:"white",fontSize: "2rem",padding: "0 5px"}}></Facebook>
            <Instagram  className={`${styles.NavIcon}`} style={{color:"white",fontSize: "2rem",padding: "0 5px"}}></Instagram>
            <Whatsapp  className={`${styles.NavIcon}`} style={{color:"white",fontSize: "2rem",padding: "0 5px"}}></Whatsapp>
            <Twitter  className={`${styles.NavIcon}`} style={{color:"white",fontSize: "2rem",padding: "0 5px"}}></Twitter>
        </div>
        </div> 
        </div>
  )
}
