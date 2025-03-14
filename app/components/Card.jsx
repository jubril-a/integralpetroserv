import styles from './card.module.scss'

const Card = ({image, title, description, orientation}) => {
  return (
    <div className={styles.card}>
      <div className={orientation == "portrait" ? `${styles.imgContainer} ${styles.portrait}` : styles.imgContainer} style={{backgroundImage: `url(/images/${image})`}}>
      </div>
      <div className={styles.description}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card