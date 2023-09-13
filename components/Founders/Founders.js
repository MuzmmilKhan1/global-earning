'use client'
import React from 'react'
import { Slider } from './Components For founders/slider'
import styles from "../../app/CSS/founders.module.css";
import AnimationForFounders from './Components For founders/AnimationForFounders';
import Content from './Components For founders/Content';

export default function Founders() {
  return (
    <div className={`${styles.founders}`} id='founder'>
      <AnimationForFounders></AnimationForFounders>
      <div className={`${styles.foundersContent}`}>
        <Slider></Slider>
        <Content></Content>
      </div>
    </div>
  )
}
