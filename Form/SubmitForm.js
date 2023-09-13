'use client'
import React from 'react'
import styles from '../app/CSS/Form/form.module.css'
import Footer from '@/components/Contact/Components/Footer'
import Form from './Components/Form'
import NavbarForOther from '@/components/Navbar/Navbar'

export default function SubmitForm() {
    return (
        <div className={`container-fluid ${styles.body}`}>
            <NavbarForOther></NavbarForOther>
            {/* Form */}
            <Form></Form>
            <Footer></Footer>
        </div>
  )
}
