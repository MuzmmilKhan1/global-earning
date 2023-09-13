import React from 'react'
import styles from "../../../app/CSS/banner.module.css"
import { motion } from 'framer-motion';
import ShootingStar from './ShootingStar';


export default function AnimatatedElements() {

  // Ship Animations
  const animationVariantsShip1 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    hidden: {
      opacity: 0,
      x: '-20%',
    },
  };  

  const animationVariantsShip2 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    hidden: {
      opacity: 0,
      x: '40%',
    },
  };  

  const animationVariantsShip3 = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hidden: {
      opacity: 0,
      y: '-20%',
    },
  };  




  return (
    <>

    {/* Ships */}
    <motion.div
    className="image-container"
    initial="hidden"
    whileInView="visible"
    variants={animationVariantsShip1}
    >

         <img className={`${styles.pic1}`}
         src='/Images/banner/ship1.png'></img>
    </motion.div>
    <motion.div
    className="image-container"
    initial="hidden"
    whileInView="visible"
    variants={animationVariantsShip2}
    >

        <img className={`${styles.pic2}`}
         src='/Images/banner/ship2.png'></img>
    </motion.div>
    <motion.div
    className="image-container"
    initial="hidden"
    whileInView="visible"
    variants={animationVariantsShip3}
    >

        <img className={`${styles.pic3}`}
         src='/Images/banner/ship3.png'></img>
    </motion.div>

    {/* Falling Stars */}
    <ShootingStar></ShootingStar>

      {/* Robots */}
      <div className={`${styles.robot1}`}>
        <img src="/Images/banner/man1.png">
        </img>
      </div>
      <div className={`${styles.robot2}`}>
        <img src="/Images/banner/man2.png">
        </img>
      </div>
      <div className={`${styles.robot3}`}>
        <img src="/Images/banner/Robot.png">
        </img>
      </div>
    </>
  )
}
