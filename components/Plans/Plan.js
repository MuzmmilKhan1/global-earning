import React from 'react'
import PricingCards from './Components For Plan/PricingCards'
import styles from "../../app/CSS/pricing.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Plan() {
  return (
    <div className={`${styles.plan}`} id='plan'>
      <h4>Choose Your</h4>
      <h1>Plans</h1>
    <div className={`${styles.planChild} row`}>
      <PricingCards Package={"Silver"} Tasks={"2"}
      PerReferal={"500"} Investment={"1800"} WeeklyEarning={"2500"}></PricingCards>
      <PricingCards Package={"Gold"} Tasks={"2"}
      PerReferal={"700"} Investment={"2300"} WeeklyEarning={"3000"}></PricingCards>
      <PricingCards Package={"Diamond"} Tasks={"2"}
      PerReferal={"900"} Investment={"3300"} WeeklyEarning={"4000"}></PricingCards>
      <PricingCards Package={"Bronze"} Tasks={"2"}
      PerReferal={"1100"} Investment={"4800"} WeeklyEarning={"5500"}></PricingCards>
      <PricingCards Package={"Premium"} Tasks={"2"}
      PerReferal={"1300"} Investment={"5800"} WeeklyEarning={"6500"}></PricingCards>
    </div>
    </div>
  )
}