import React, { Component } from "react"
import { func } from "prop-types"
import Styles from "./serviceimages.module.scss"
import Residential from "../images/Residential.jpg"
import Commercial from "../images/Commercial.jpg"
import NewConstruction from "../images/New Construction.jpg"
import MediaQuery from "react-responsive"
import { Link } from "gatsby"
// Icons
import Dishwasher from "../components/icons/dishwasher"
import Faucet from "../components/icons/faucet"
import GarbageDisposal from "../components/icons/garbagedisposal"
import PipeLeak from "../components/icons/pipeleak"
import PipeObstruction from "../components/icons/pipeobstruction"
import Shower from "../components/icons/shower"
import Sink from "../components/icons/sink"
import SumpPump from "../components/icons/sumppump"
import Toilet from "../components/icons/toilet"
import Bathtub from "../components/icons/bathtub"
import WashingMachine from "../components/icons/washingmachine"
import WaterFiltration from "../components/icons/waterfiltration"
import WaterHeater from "../components/icons/waterheater"
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
    <div className={Styles.serviceimages}>
      <div className={Styles.container}>
        <Link>
          <div className={Styles.card}>
            <Faucet className={Styles.card_icon} />
            <h5 className={Styles.card_title}>Faucet Repairs</h5>
          </div>
        </Link>
        <Link>
          <div className={Styles.card}>
            <SumpPump className={Styles.card_icon} />
            <h5 className={Styles.card_title}>Sump Pump Installation</h5>
          </div>
        </Link>
        <Link>
          <div className={Styles.card}>
            <WaterHeater className={Styles.card_icon} />
            <h5 className={Styles.card_title}>Water Heater Replacement</h5>
          </div>
        </Link>
        <Link>
          <div className={Styles.card}>
            <PipeObstruction className={Styles.card_icon} />
            <h5 className={Styles.card_title}>Rodding</h5>
          </div>
        </Link>
        <Link>
          <div className={Styles.card}>
            <WaterFiltration className={Styles.card_icon} />
            <h5 className={Styles.card_title}>Water Filtration</h5>
          </div>
        </Link>
        <Link>
          <div className={Styles.card}>
            <Toilet className={Styles.card_icon} />
            <h5 className={Styles.card_title}>Toilet Repair</h5>
          </div>
        </Link>
        <Link>
          <div className={Styles.card}>
            <PipeLeak className={Styles.card_icon} />
            <h5 className={Styles.card_title}>Leak Repair</h5>
          </div>
        </Link>
        <Link>
          <div className={Styles.card}>
            <GarbageDisposal className={Styles.card_icon} />
            <h5 className={Styles.card_title}>Garbage Disposals</h5>
          </div>
        </Link>
        <Link>
          <div className={Styles.card}>
            <Sink className={Styles.card_icon} />
            <h5 className={Styles.card_title}>Sink Installation</h5>
          </div>
        </Link>

        <Link>
          <div className={Styles.card}>
            <Shower className={Styles.card_icon} />
            <h5 className={Styles.card_title}>Shower Repair</h5>
          </div>
        </Link>

        <Link>
          <div className={Styles.card}>
            <Bathtub className={Styles.card_icon} />
            <h5 className={Styles.card_title}>Tub Repairs</h5>
          </div>
        </Link>
        <Link>
          <div className={Styles.card}>
            <Dishwasher className={Styles.card_icon} />
            <h5 className={Styles.card_title}>Dishwasher Repair</h5>
          </div>
        </Link>
        <Link>
          <div className={Styles.card}>
            <WashingMachine className={Styles.card_icon} />
            <h5 className={Styles.card_title}>Laundry Hookup</h5>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default IndexPage
