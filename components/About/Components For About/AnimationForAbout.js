import React from 'react'
import styles from '../../../app/CSS/about.module.css'
import ShootingStar from './ShootingStarForAbout'
import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

export default function AnimationForAbout() {

  return (
    <div className={`${styles.Animations}`}>
        {/* Planets */}
        <div className={`${styles.planet1}`}>
      <img
        src="/Images/about/planet-1.png"
        alt="Image"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
        {/* Stars */}
        <ShootingStar></ShootingStar>
    </div>
  )
}
