'use client'

import Image from "next/image"
import { useContext } from "react"
import styles from "./serviceCard.module.scss"
import ActiveContext from "./ActiveContext"

const ServiceCard = ({id, heading, services, image, imageDesc}) => {
  let { setActive } = useContext(ActiveContext)

  function clickHandler() {
    setActive(id)
  }

  return (
    <div className={styles.serviceCard} onClick={clickHandler}>
        <h3 className={styles.h3}>{heading}</h3>
        <Image className={styles.img} src={image} alt={imageDesc} width={414} height={232.88}></Image>
        <div>
          {services.slice(0, 4).map((service) => <p key={service.length} className={styles.service}>{service}</p>)}
          <button className={styles.button}>EXPAND VIEW →</button>
        </div>
    </div>
  )
}

export default ServiceCard