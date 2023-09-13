"use client"
import React from 'react'
import style from '../../app/CSS/banner.module.css'
import AnimatatedElements from './home-Components/AnimatatedElements'
import Navbar from './home-Components/Navbar'
import Contents from './home-Components/Contents'

export default function Banner() {
  return (
    // Background Wrapper
    <section className={`banner-section bg bg_img ${style['banner-section']}`} id="home">
      <div>
        <AnimatatedElements></AnimatatedElements>
      </div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Contents/>
      </div>
    </section>

  )
}
