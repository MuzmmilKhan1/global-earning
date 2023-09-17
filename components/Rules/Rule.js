/* eslint-disable react/no-unescaped-entities */ 
'use client'
import React from 'react';
import styles from '../../app/CSS/rule.module.css';
import AnimationForRules from './Components For Rules/AnimationForRules';
import { Accordion } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';


function CustomToggle({ children, eventKey}) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: '#171744', color: "white", border: "none", width: "100%", padding: "0", margin: "0", textAlign: "left" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default function Rule() {

  return (
    <div className={`${styles.rulesWrapper}`} id='rule'>
        <div className={`${styles.rulesHeader}`}>
            <h4 className={`${styles.subtitle}`}>Must Read</h4>
            <h2 className={`${styles.title}`}>Rules</h2>
            <span>Please read the rules first. Feel free to contact us in case of any queries</span>
        </div>

        <div className={`${styles.rules}`}>
        <div className={`${styles.rulesCollapsible}`}>
        <Accordion defaultActiveKey="0" className={`${styles.Accordion}`}>
      <Card className={`${styles.AccordionBody} ${styles.AccordionItem}`}>
        <Card.Header className={`${styles.AccordionBody} ${styles.AccordionHeader}`}>
          <CustomToggle eventKey="0">
            Rule #1
            </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0"  className={`${styles.AccordionBody}`}>
          <Card.Body className={`${styles.AccordionBody}`}>
            <hr></hr>
            If you complete your task within a week, your earnings will be sent to you through JazzCash or Easypaisa.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className={`${styles.AccordionBody} ${styles.AccordionItem}`}>
        <Card.Header className={`${styles.AccordionHeader} ${styles.AccordionHeader}`}>
          <CustomToggle eventKey="1">Rule #2</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1" className={`${styles.AccordionBody}`}>
          <Card.Body className={`${styles.AccordionBody}`}>
          <hr></hr>
            If you successfully complete one task, you'll receive your salary immediately, and then you'll be assigned your second task. After that, a new task will start.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className={`${styles.AccordionBody} ${styles.AccordionItem}`}>
        <Card.Header className={`${styles.AccordionBody} ${styles.AccordionHeader}`}>
          <CustomToggle eventKey="2">Rule #3</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2" className={`${styles.AccordionBody}`}>
          <Card.Body className={`${styles.AccordionBody}`}>
          <hr></hr>
            If you fail to complete any task, you won't receive your salary for that week.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className={`${styles.AccordionBody} ${styles.AccordionItem}`}>
        <Card.Header className={`${styles.AccordionBody} ${styles.AccordionHeader}`}>
          <CustomToggle eventKey="3">Rule #4</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3" className={`${styles.AccordionBody}`}>
          <Card.Body className={`${styles.AccordionBody}`}>
          <hr></hr>
            If the screenshot of payment from your referred members is not provided, their payment won't be accepted.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className={`${styles.AccordionBody} ${styles.AccordionItem}`}>
        <Card.Header className={`${styles.AccordionBody} ${styles.AccordionHeader}`}>
          <CustomToggle eventKey="4">Rule #5</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4" className={`${styles.AccordionBody}`}>
          <Card.Body className={`${styles.AccordionBody}`}>
          <hr></hr>
            If your referred member doesn't join within 1 hour, they won't be added.</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>

        </div>
        <AnimationForRules></AnimationForRules>
        </div>
    </div>
  )
}

/* eslint-disable react/no-unescaped-entities */ 
