'use client'

import { motion } from "motion/react"
import LinkButton from './LinkButton'
import styles from './Hero.module.scss'
import { useState } from "react"

const Hero = () => {

    const heroContents = {
        hero_1 : {
            id: "1",
            h1: "Welcome to Integral PetroServ Limited",
            subheading: "Top-notch professional consulting services for upstream oil and gas businesses.",
            cta: "Explore Our Services",
            bgImage: "hero-background.jpg",
        },
        hero_2 : {
            id: "2",
            h1: "Maximizing ROI through proven expertise in exploration and production",
            subheading: "Our goal is to create a difference in the E&P service delivery value chain while maximizing returns on investment and guaranteed clients satisfaction.",
            cta: "Request a Consultation",
            bgImage: "hero-background2.jpg",
        },
        hero_3 : {
            id: "3",
            h1: "Unmatched Expertise in Oil & Gas Exploration and Production",
            subheading: "With over 150 years of combined hands-on experience, our team delivers world-class projects across exploration, development, and production.",
            cta: "Leverage Our Expertise",
            bgImage: "hero-background3.jpg",
        },
    }

    let [currentHero, setCurrentHero] = useState(heroContents.hero_1)

    const changeCurrent = (slide) => {
        setCurrentHero(slide)
    }

    

  return (
    <motion.header    
      className={styles.header}>
        <motion.div
         key={currentHero.id}
         initial={{filter: "blur(5px)", scale: 1.05}}
         animate={{filter: "blur(0)", scale: 1}}
         transition={{duration: 1}}
         className={styles.background} style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, .8), rgba(0, 0, 0, .4)), url(/images/${currentHero["bgImage"]})`}}></motion.div>
        <div className={styles.constraint_I}>
            <motion.div
             key={currentHero.id}
             initial={{y: 60, opacity: 0}}
             animate={{y: 0, opacity: 1}}
             transition={{duration: 1, delay: .5, ease: [.246,.75,.187,1]}}
             className={styles.main_content}>
                <h1>{currentHero.h1}</h1>
                <p className={styles.subheading}>{currentHero.subheading}</p>
                <LinkButton label={currentHero.cta}/>
            </motion.div>
            <div className={styles.progressBars}>
                <div className={currentHero.id == 1 ? `${styles.progressBar} ${styles.active}` : styles.progressBar} onClick={() => {changeCurrent(heroContents.hero_1)}}></div>
                <div className={currentHero.id == 2 ? `${styles.progressBar} ${styles.active}` : styles.progressBar} onClick={() => {changeCurrent(heroContents.hero_2)}}></div>
                <div className={currentHero.id == 3 ? `${styles.progressBar} ${styles.active}` : styles.progressBar} onClick={() => {changeCurrent(heroContents.hero_3)}}></div>
            </div>
        </div>
    </motion.header>
  )
}

export default Hero