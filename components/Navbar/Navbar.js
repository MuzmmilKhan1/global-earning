import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "../../app/CSS/banner.module.css"
import { ThreeDots } from 'react-bootstrap-icons';
import Link from 'next/link';

export default function NavbarForOther() {
    return (
        <Navbar collapseOnSelect 
        expand="lg"
        className={`${styles.navbootstrap}`}>
          <Container>
            <Navbar.Brand className={`${styles.navBrand}`}><img src='/Images/banner/logoToBeUsed.png' className={`${styles.navLogo}`}></img></Navbar.Brand>
            <Navbar.Toggle className={`${styles.toggleBar}`} 
            aria-controls="responsive-navbar-nav"
            ><ThreeDots></ThreeDots></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link href='/' className={`${styles.navLink} nav-link`}>Home</Link>
                <Link href='/' className={`${styles.navLink} nav-link`}>About us</Link>
                <Link href='/' className={`${styles.navLink} nav-link`}>Plan</Link>
                <Link href='/' className={`${styles.navLink} nav-link`}>Rule</Link>
                <Link href='/' className={`${styles.navLink} nav-link`}>Founders</Link>
                <Link href='/' className={`${styles.navLink} nav-link`}>Contact Us</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
