import styles from './AboutHeading.module.scss'

const AboutHeading = () => {
  return (
    <div className={`section ${styles.hero}`}>
        <div className="constraint-I">
            <h1>About Us</h1>
            <p>Incorporated in Nigeria in 2019 with offices in Lagos and Houston</p>
        </div>
    </div>
  )
}

export default AboutHeading