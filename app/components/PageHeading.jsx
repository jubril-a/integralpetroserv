import styles from './PageHeading.module.scss'

const PageHeading = ({ children }) => {
  return (
    <div className={`section ${styles.hero}`}>
        <div className="constraint-I">
            {children}
        </div>
    </div>
  )
}

export default PageHeading