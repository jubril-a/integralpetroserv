import styles from './about.module.scss'
import LinkButton from "./LinkButton"
import SectionHead from './SectionHead'
import AnimatedHeading from './AnimatedHeading'

const About = () => {
  return (
    <div className='section'>
      <section className={"constraint-I"}>
        <SectionHead title="About IPS" subtitle="Incorporated in Nigeria in 2019 with offices in Lagos and Houston." />
        <h3 className={styles.sub}><AnimatedHeading text="We are an integrated oil and gas servicing and consulting firm with strong expertise in Petroleum Geosciences and Engineering."/></h3>
        <div className={styles.aboutCol}>
          <div></div>
          <div>
            <p className="body-text">We provide top-notch professional consulting services to the upstream Oil and gas businesses on a global scale. Ours is to bridge the gaps existing between traditional service providers and customer’s expectations, especially on products quality.</p>
            <p className="body-text">The company prides itself in its array of the best and highly experienced professionals in the oil industry with a global pedigree.</p>
            <LinkButton label="Read More"/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About