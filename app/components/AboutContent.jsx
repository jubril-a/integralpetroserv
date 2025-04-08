import styles from './AboutContent.module.scss'
import Image from 'next/image'

const AboutContent = () => {
  return (
    <section className='section'>
        <div className={`constraint-I ${styles.Wrapper}`}>
            <h2>IPS is an integrated oil and gas servicing and consulting firm with strong expertise in Petroleum Geosciences and Engineering, to provide top-notch professional consulting services to the upstream Oil and gas businesses on a global scale. </h2>
            <div className={styles.twoCol}>
                <Image src="/images/ips-logo.jpg" alt="" width={427} height={338}></Image>
                <div>
                    <p className='body-text'>We bridge the gaps existing between traditional service providers and customer&apos;s expectations, especially on products quality. The company prides itself in its array of some of the best and highly experienced professionals in the oil industry with a global pedigree.</p>
                    <p className='body-text'>This is a team of accomplished professionals that have clearly demonstrated competencies in the integrated asset management and field optimization. We are well-grounded in basins exploration and overall life-cycle asset optimization, field reconnaissance and depletion planning.</p>
                </div>
            </div>
            <p className={`body-text ${styles.lastParagraph}`}>We have extensive experience in the Nigerian Niger Delta including major petroleum provinces mainly in conventional reservoirs. We have the expertise to carry out commercial evaluations to support mergers, acquisitions and divestment activities. We offer services in the different areas of petroleum reservoir studies, capacity building, field development planning, production optimization, resourcing, training, mentoring, assets management etc.</p>   
        </div>
    </section>
  )
}

export default AboutContent