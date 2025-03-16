'use client'

import { motion } from "motion/react"
import LinkButton from './LinkButton'
import styles from './Hero.module.scss'

const Hero = () => {

    const changeCurrent = (currentSlide, currentBar) => {

    }

  return (
    <header className={styles.header} style={{backgroundImage: "url('/images/hero-background.jpg')"}}>
        <div className={styles.constraint_I}>
            <div className={styles.main_content}>
                <h1>Welcome to Integral PetroServ Limited</h1>
                <p className={styles.subheading}>Top-notch professional consulting services to upstream oil and gas businesses.</p>
                <LinkButton label="Explore Our Services"/>
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