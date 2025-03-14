import styles from './sectionhead.module.scss';

const SectionHead = ({title, subtitle}) => {
  return (
    <div className={styles.headWrapper}>
        <div className={styles.sectionHead}>
            <h2 className={styles.h2}>{title}</h2>
            <p className={styles.subheading}>{subtitle}</p>
        </div>
    </div>
  )
}

export default SectionHead