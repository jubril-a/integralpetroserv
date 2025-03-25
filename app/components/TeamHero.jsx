import styles from './teamHero.module.scss'
const TeamHero = () => {
  return (
    <div className={styles.Wrappper}>
      <div className={styles.overlay}></div>
        <header className='constraint-I'>
            <div>
            <div className={styles.hero_image}></div>
            <div className={styles.hero_text}>
                <h1 className={styles.heading}>Professionals with unmatched Expertise in Oil & Gas Exploration and Production.</h1>
                <p className={`${styles.bodyText} body-text`}>With over 150 years of combined hands-on experience, our team delivers world-class projects across exploration, development, and production.</p>
            </div>
            </div>
        </header>
    </div>
  )
}

export default TeamHero