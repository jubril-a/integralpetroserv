import styles from './teamHero.module.scss'
const TeamHero = () => {
  return (
    <div className={styles.Wrappper}>
        <header className='constraint-I'>
            <div>
            <div className={styles.hero_image}></div>
            <div className={styles.hero_text}>
                <h1>The Management Team</h1>
                <p className={styles.heading}>Professionals with unmatched Expertise in Oil & Gas Exploration and Production.</p>
                <p className={`${styles.bodyText} body-text`}>With over 150 years of combined hands-on experience, our team delivers world-class projects across exploration, development, and production.</p>
            </div>
            </div>
        </header>
    </div>
  )
}

export default TeamHero