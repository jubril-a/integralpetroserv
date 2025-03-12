import styles from './LinkButton.module.scss'

const LinkButton = ({label}) => {
  return (
    <a href="#" className={styles.linkButton}>{label}</a>
  )
}

export default LinkButton