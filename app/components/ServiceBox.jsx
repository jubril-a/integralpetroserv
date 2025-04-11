import Image from "next/image"
import styles from "./serviceCard.module.scss"

const ServiceBox = ({heading, services, image, imageDesc}) => {
  return (
    <div className={styles.expanded}>
        <div className={styles.serviceBox}>
            <Image src="/images/close.png" width="26" height="26" alt="menu" onClick={() => alert("hello")} style={{marginLeft: 'auto', marginBottom: '2rem', display: 'block'}}/>
            <h3 className={styles.h3}>{heading}</h3>
            <Image className={styles.img} src={image} alt={imageDesc} width={414} height={232.88}></Image>
            <div>
            {services.map((service) => <p className={styles.service}>{service}</p>)}
            </div>
        </div>
    </div>
  )
}

export default ServiceBox