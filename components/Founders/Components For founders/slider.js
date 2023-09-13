'use client'
import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styles from "../../../app/CSS/founders.module.css";
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import AnimationForFounders from './AnimationForFounders';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <>
    <div className={`${styles.CarouselItem}`} onDragStart={handleDragStart} role="presentation">
        <img src="/Images/founders/client-1.png" />
        <h1>Founder No 1</h1>
        <p>Mr. X is the CEO of the GALS. I is the sole supporter and Bringer of this Idea to bring Change to this world.</p>
    </div>
    </>,
    <>
    <div className={`${styles.CarouselItem}`} onDragStart={handleDragStart} role="presentation">
        <img src="/Images/founders/client-2.png" />
        <h1>Founder No 1</h1>
        <p>Mr. X is the CEO of the GALS. I is the sole supporter and Bringer of this Idea to bring Change to this world.</p>
    </div>
    </>,
    <>
    <div className={`${styles.CarouselItem}`} onDragStart={handleDragStart} role="presentation">
        <img src="/Images/founders/client-3.png" />
        <h1>Founder No 1</h1>
        <p>Mr. X is the CEO of the GALS. I is the sole supporter and Bringer of this Idea to bring Change to this world.</p>
    </div>
    </>,
];

export const Slider = () => {
    
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };
  return (
    <>
    <div className={styles.customCarousel}>
  <AliceCarousel
    className={`${styles.Carousel}`}
    ref={carouselRef}
    // autoPlay={false}
    // autoPlayInterval={4000}
    mouseTracking
    disableButtonsControls
    infinite
    items={items}
  />
  <div className={styles.customCarouselButtonContainer}>
    <button onClick={handlePrevClick} className={`${styles.customCarouselButton} ${styles.customCarouselButtonLeft}`}><ChevronLeft style={{ color: "white" }} /></button>
    <button onClick={handleNextClick} className={`${styles.customCarouselButton} ${styles.customCarouselButtonRight}`}><ChevronRight style={{ color: "white" }} /></button>
  </div>
</div>
    </>
  );
}
