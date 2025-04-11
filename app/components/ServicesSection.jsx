'use client'

import { useState } from 'react'
import styles from './ServicesSection.module.scss'
import ServiceCard from './ServiceCard'
import ServiceBox from './ServiceBox'
import { detailed_services as services }  from './data'
import ActiveContext from './ActiveContext'

const ServicesSection = () => {
  let [ active, setActive ] = useState(null)

  return (
    <ActiveContext.Provider value={{active, setActive}}>
      <div className='section'>
        {(active != null ) && <ServiceBox heading={services[active].service} services={services[active].subservices} image={`/images/${services[active].imgName}`} imageDesc={services[active].imgDesc} />}
        <div className={styles.Wrapper}>
          {services.map((service) => <ServiceCard key={service.id} id={service.id} heading={service.service} services={service.subservices} image={`/images/${service.imgName}`} imageDesc={service.imgDesc} />)}
        </div>
      </div>
    </ActiveContext.Provider>
  )
}

export default ServicesSection