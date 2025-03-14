import styles from './services.module.scss'
import SectionHead from './SectionHead'
import Card from './Card'
import LinkButton from './LinkButton'

const services = [
    {
        key: "service-1",
        image: "subsurface.png",
        title: "Subsurface Geoscience & Engineering",
        description: "Integrated Subsurface Studies, Asset & Reservoir Management, ..."
    },
    {
        key: "service-2",
        image: "surface.png",
        title: "Surface Engineering",
        description: "Facilities Management, Asset Integrity Evaluation, Facilities Optimization, ..."
    },
    {
        key: "service-3",
        image: "equipment.png",
        title: "Production Equipment & Procurement",
        description: "Production Equipment Maintenance, Machineries Procurement, ..."
    },
    {
        key: "service-4",
        image: "hr.jpg",
        title: "Human Resourcing and Capacity Building",
        description: "Training, Mentoring, Sourcing, ..."
    },
    {
        key: "service-5",
        image: "funding.jpg",
        title: "Funding/Financial Facilitators",
        description: ""
    },
]

const Services = () => {
  return (
    <div className={styles.sectionWrapper}>
        <section className={`${styles.services} constraint-I`}>
            <SectionHead title="Our Core Services" subtitle="Optimizing production, developing talent, and managing assets." />
            <div className={styles.servicesCards}>
                {services.map((service) =>
                    <Card key={service.key} image={service.image} imgDesc={service.imgDesc} title={service.title} description={service.description} orientation="landscape"/>
                )}
            </div>
            <LinkButton label="View all Services"/>
        </section>
    </div>
  )
}

export default Services