import styles from './services.module.scss'
import SectionHead from './SectionHead'
import Card from './Card'
import LinkButton from './LinkButton'
import { services } from './data'

const Services = () => {
  return (
    <div className={`section ${styles.sectionWrapper}`}>
        <section className={`${styles.services} constraint-I`}>
            <SectionHead title="Our Core Services" subtitle="Optimizing production, developing talent, and managing assets." />
            <div className={styles.servicesCards}>
                {services.map((service) =>
                    <Card key={service.key} image={service.image} imgDesc={service.imgDesc} title={service.title} description={service.description} orientation="landscape"/>
                )}
            </div>
            <LinkButton label="View all Services" destination="/services"/>
        </section>
    </div>
  )
}

export default Services