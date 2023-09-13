import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "../../../app/CSS/banner.module.css"
import { ThreeDots } from 'react-bootstrap-icons';


function FixedNavbar() {
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
            <Nav.Link href="#home" className={`${styles.navLink}`} >
              Home
              </Nav.Link>
            <Nav.Link href="#plan" className={`${styles.navLink}`}> Plan</Nav.Link>
            <Nav.Link className={`${styles.navLink}`}>About Us</Nav.Link>
            <Nav.Link href="#rule" className={`${styles.navLink}`}>Rules</Nav.Link>
            <Nav.Link href="#founder" className={`${styles.navLink}`}>Founders</Nav.Link>
            <Nav.Link href="#contact" className={`${styles.navLink}`}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FixedNavbar;