import React, { Component } from "react"
import { func } from "prop-types"
import CarouselStyles from "./WordCarousel.module.scss"
import TruckPlumber from "../images/Worker and Truck.jpg"
import MediaQuery from "react-responsive"
const IndexPage = function () {
  //   let MyInterval = {
  //     int: 0,
  //   }

  //   let titleInt = props.slides.title[MyInterval.int]
  //   let imageInt = props.slides.image[MyInterval.int]

  //   let increment = function () {
  //     MyInterval.int = MyInterval.int + 1
  //     console.log(MyInterval.int)
  //   }

  //   setInterval(increment, 3000)

  return (
    <section className={CarouselStyles.word_carousel}>
      <div className={CarouselStyles.left}>
        <img src={TruckPlumber} alt="" />
      </div>
      <div className={CarouselStyles.right}>
        <div className={CarouselStyles.carousel}>
          <div className={CarouselStyles.change}>
            <div className={CarouselStyles.element}>
              Toilet Constantly Running?
            </div>
            <div className={CarouselStyles.element}>
              Need a New Water Heater?
            </div>
            <div className={CarouselStyles.element}>
              Sump Pump Constantly Running?
            </div>
            <div className={CarouselStyles.element}>Drains Obstructed?</div>
            <div className={CarouselStyles.element}>Old Pipes Leaking?</div>
            <div className={CarouselStyles.element}>Annual RPZ Testing?</div>
            <div className={CarouselStyles.element}>
              Time For a New Ejector Pump?
            </div>
            <div className={CarouselStyles.element}>Sewer Need Rodding?</div>
            <div className={CarouselStyles.element}>
              Toilet Constantly Running?
            </div>
          </div>
        </div>
        <h1>Our Plumbers Can Handle It.</h1>
        <a href="#">
          <button>Talk To A Plumber</button>
        </a>
      </div>
    </section>
  )
}

export default IndexPage
