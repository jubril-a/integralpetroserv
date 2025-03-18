import styles from './LinkButton.module.scss'

const LinkButton = ({label, destination}) => {
  return (
    <a href={destination} className={styles.linkButton}>{label}</a>
  )
}

export default LinkButton