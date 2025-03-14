import styles from './team.module.scss'
import SectionHead from './SectionHead'
import Card from './Card'

const team = [
    {
        key: "person-1",
        image: "taye.jpg",
        name: "Taye Akewusola",
        position: "Principal Consultant/ Managing Partner"
    },
    {
        key: "person-2",
        image: "bruce.jpg",
        name: "Engr. Onengiye G. Bruce",
        position: "Principal Partner"
    },
    {
        key: "person-3",
        image: "henry.jpg",
        name: "Henry Ogunnusi",
        position: "(M.Sc.) Principal Partner"
    },
    {
        key: "person-4",
        image: "rotimi.jpg",
        name: "Rotimi F. Ogunlowo",
        position: "Reservoir Engineering Consultant"
    },
]

const Team = () => {
  return (
    <div className={styles.sectionWrapper}>
        <section className={`${styles.services} constraint-I`}>
            <SectionHead title="Our Management Team" subtitle="Led by seasoned professionals with extensive industry experience and a commitment to excellence." />
            <div className={styles.servicesCards}>
                {team.map((member) =>
                    <Card key={member.key} image={member.image} imgDesc={member.imgDesc} title={member.name} description={member.position} orientation="portrait" />
                )}
            </div>
        </section>
    </div>
  )
}

export default Team