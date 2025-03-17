import styles from './team.module.scss'
import SectionHead from './SectionHead'
import Card from './Card'
import LinkButton from './LinkButton'
import { team } from './data'


const Team = () => {
  return (
    <div className={`${styles.sectionWrapper} section`}>
        <section className={`${styles.team} constraint-I`}>
            <SectionHead title="Our Management Team" subtitle="Led by seasoned professionals with extensive industry experience and a commitment to excellence." />
            <div className={styles.teamCards}>
                {team.map((member) =>
                    <Card key={member.key} image={member.image} imgDesc={member.imgDesc} title={member.name} description={member.position} orientation="portrait" />
                )}
            </div>
            <LinkButton label="View Full Team Profile" />
        </section>
    </div>
  )
}

export default Team