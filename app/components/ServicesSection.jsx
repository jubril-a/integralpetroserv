'use client'

import { useState } from 'react'
import styles from './ServicesSection.module.scss'
import ServiceCard from './ServiceCard'
import ServiceBox from './ServiceBox'
import { detailed_services as services }  from './data'

const ServicesSection = () => {
  let [ active, setActive ] = useState(1)

  return (
    <div className='section'>
      {(active != null ) && <ServiceBox heading={services[active].service} services={services[active].subservices} image={`/images/${services[active].imgName}`} imageDesc={services[active].imgDesc} />}
      <div className={styles.Wrapper}>
        {services.map((service) => <ServiceCard heading={service.service} services={service.subservices} image={`/images/${service.imgName}`} imageDesc={service.imgDesc} />)}
      </div>
    </div>
  )
}

export default ServicesSection