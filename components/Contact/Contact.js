import React from 'react'
import styles from '../../app/CSS/Contact.module.css'
import Footer from './Components/Footer'
import ContactForm from './Components/ContactForm'

export default function Contact() {
  return (
    <div className={`${styles.ContactPlusFooter}`} id='contact'>
        {/* Contact Details */}
        <ContactForm></ContactForm>
        {/* Footer */}
        <Footer></Footer>
    </div>
  )
}
