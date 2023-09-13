'use client'
import React, {useState} from 'react'
import { TelephoneFill } from 'react-bootstrap-icons'
import styles  from '../../../app/CSS/Contact.module.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ContactForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>NewsLetter</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thanks for Subscribing To Our NewsLetter!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    <div className={`${styles.ContactParentDiv}`}>
        <div className={`${styles.ContactChildDiv}`}>
            <h4 className={`${styles.h4}`}>Subscribe to</h4>
            <h2 className={`${styles.h2}`}>Get to know our exclusive offers</h2>
            <form className={`${styles.Form}`}>
              <input className={`${styles.input}`} placeholder='Please Enter your Email'></input>
              <button className={`${styles.FormButton}`} onClick={()=>{setShow(true)}}>Subscribe</button>
            </form>
            <p className={`${styles.p}`}>We respect your privacy, so we never share your info</p>
        </div>
            <a className={`${styles.phoneLinkRipples}`} href="tel:+1234567890">
                <TelephoneFill className={`${styles.phoneIcon}`} style={{fontWeight: "4rem", color: "white", fontSize: "2rem"}}/>
              <div className={`${styles.phoneLinkInner}`}>
              </div>
            </a>
    </div>
    </>
  )
}
