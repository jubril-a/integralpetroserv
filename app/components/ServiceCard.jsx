'use client'

import Image from "next/image"
import styles from "./serviceCard.module.scss"

const ServiceCard = ({heading, services, image, imageDesc}) => {

    function clickHandler() {
        alert("Hello World")
    }

  return (
    <div className={styles.serviceCard} onClick={clickHandler}>
        <h3 className={styles.h3}>{heading}</h3>
        <Image className={styles.img} src={image} alt={imageDesc} width={414} height={232.88}></Image>
        <div>
          {services.slice(0, 4).map((service) => <p className={styles.service}>{service}</p>)}
          <button className={styles.button}>EXPAND VIEW →</button>
        </div>
    </div>
  )
}

export default ServiceCard