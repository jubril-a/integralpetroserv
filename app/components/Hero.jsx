'use client'

import { motion } from "motion/react"
import LinkButton from './LinkButton'
import styles from './Hero.module.scss'

const Hero = () => {

    const heroContents = {
        hero_1 : {
            h1: "Welcome to Integral PetroServ Limited",
            subheading: "Top-notch professional consulting services to upstream oil and gas businesses.",
            cta: "Explore Our Services",
            bgImage: "hero-background.jpg",
        },
        hero_2 : {
            h1: "Maximizing ROI through proven expertise in exploration and production",
            subheading: "Our goal is to create a difference in the E&P service delivery value chain while maximizing returns on investment and guaranteed clients satisfaction.",
            cta: "Request a Consultation",
            bgImage: "hero-background.jpg",
        },
        hero_3 : {
            h1: "Unmatched Expertise in Oil & Gas Exploration and Production",
            subheading: "With over 150 years of combined hands-on experience, our team delivers world-class projects across exploration, development, and production.",
            cta: "Leverage Our Expertise",
            bgImage: "hero-background.jpg",
        },
    }

    let currentHero = heroContents.hero_1

    const changeCurrent = (currentSlide, currentBar) => {
    }

  return (
    <header className={styles.header} style={{backgroundImage: `url(/images/${currentHero.bgImage})`}}>
        <div className={styles.constraint_I}>
            <div className={styles.main_content}>
                <h1>{currentHero.h1}</h1>
                <p className={styles.subheading}>{currentHero.subheading}</p>
                <LinkButton label={currentHero.cta}/>
            </div>
            <div className={styles.progressBars}>
                <div className={styles.progressBar} onClick={() => {}}></div>
                <div className={styles.progressBar} onClick={() => {}}></div>
                <div className={styles.progressBar} onClick={() => {}}></div>
            </div>
        </div>
    </header>
  )
}

export default Hero