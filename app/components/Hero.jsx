'use client'

import Image from 'next/image'
import { motion } from "motion/react"
import LinkButton from './LinkButton'
import styles from './Hero.module.scss'
import { useEffect, useRef } from 'react'
import { easeIn } from 'motion'

const Hero = () => {
    const HERO_1 = useRef(null)
    const HERO_2 = useRef(null)
    const HERO_3 = useRef(null)
    const BAR_1 = useRef(null)
    const BAR_2 = useRef(null)
    const BAR_3 = useRef(null)
    const visibleSlide = useRef(null)
    

    const slides = [HERO_1, HERO_2, HERO_3]
    const progressBars = [BAR_1, BAR_2, BAR_3]

    const changeCurrent = (currentSlide, currentBar) => {
        for (let slide of slides) {
            // slide.current.style.display = 'none'
            currentSlide.current.style.display = 'block'
            visibleSlide.current = currentSlide.current.id
        }

        for (let bar of progressBars) {
            bar.current.style.backgroundColor = "#D9D9D9"
            currentBar.current.style.backgroundColor = "#1BBD36"
        }
    }

    useEffect(() => {
        changeCurrent(HERO_1, BAR_1)
    }, [])

  return (
    <header className={styles.header}>
        <div ref={HERO_1}>
            <div className={styles.hero_1}>
                <div className={`${styles.content_wrapper} constraint-I`}>
                    <motion.div
                    initial={{translateY: 32}}
                    whileInView={{translateY: 0}}
                    transition={{duration: .5, ease: easeIn}}
                    className={styles.main_content}>
                        <h1>Welcome to Integral PetroServ Limited</h1>
                        <p className={styles.subheading}>Top-notch professional consulting services to upstream oil and gas businesses.</p>
                        <LinkButton label="Explore Our Services"/>
                    </motion.div>
                </div>
            </div>
        </div>
        {/* <div ref={HERO_2}>
            <div className={styles.hero_2}>
                <div className={`${styles.content2_wrapper} constraint-I`}>
                    <motion.h1
                    initial={{translateY: 32}}
                    whileInView={{translateY: 0}}
                    transition={{duration: .5, ease: easeIn}}
                    >Maximizing ROI through proven expertise in exploration and production</motion.h1>
                    <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1, delay: 1}}
                    className={styles.hero2_content}>
                        <div className={styles.hero_2_image_1}></div>
                        <div className={styles.col2}>
                            <div>
                                <p className={styles.subheading}>Our goal is to create a difference in the E&P service delivery value chain while maximizing returns on investment and guaranteed clients satisfaction.</p>
                                <LinkButton label="Request a Consultation"/>
                            </div>
                            <div className={styles.hero_2_image_2}></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
        <div ref={HERO_3}>
            <div className={styles.hero_3}>
                <div className={`${styles.content3_wrapper} constraint-I`}>
                    <motion.div
                    initial={{translateY: 42}}
                    whileInView={{translateY: 0}}
                    transition={{duration: .5, ease: easeIn}}
                    className={styles.main_content}>
                        <h1>Unmatched Expertise in Oil & Gas Exploration and Production</h1>
                        <p className={styles.subheading}>With over 150 years of combined hands-on experience, our team delivers world-class projects across exploration, development, and production.</p>
                        <LinkButton label="Leverage Our Expertise"/>
                    </motion.div>
                    <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 1}}
                    className={styles.hero_3_image}></motion.div>
                </div>
            </div>
        </div> */}
        <div className={styles.controlBoxWrapper}>
            <div className={`${styles.controlBox} constraint-I`}>
                <div className={styles.progressBars}>
                    <div ref={BAR_1} className={styles.progressBar} onClick={() => {changeCurrent(HERO_1, BAR_1)}}></div>
                    <div ref={BAR_2} className={styles.progressBar} onClick={() => {changeCurrent(HERO_2, BAR_2)}}></div>
                    <div ref={BAR_3} className={styles.progressBar} onClick={() => {changeCurrent(HERO_3, BAR_3)}}></div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Hero