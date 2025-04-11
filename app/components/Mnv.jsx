import styles from './mnv.module.scss'
import Image from 'next/image'

const Mnv = () => {
  return (
    <section className={`${styles.Wrapper} constraint-I`}>
      <div className={`${styles.mnv} ${styles.grid}`}>
          <div>
            <Image id="mission" src="/images/target.png" alt="" width={56} height={56}></Image>
            <h3>Mission Statement</h3>
            <p>To continuously deploy best in class tool kits, global best practices, and cutting-edge technologies to meet growing need for a real-time dynamic and precision-based projects execution and client&apos;s satisfaction.</p>
          </div>
          <div>
            <Image id="vision" src="/images/visionary.png" alt="" width={56} height={56}></Image>
            <h3>Vision Statement</h3>
            <p>To maximize stakeholders&apos; value, through sustainable and integrated subsurface solutions with full view of assets potential and associated uncertainties</p>
          </div>
      </div>
      <div className={styles.core}>
      <Image id="values" src="/images/quality.png" alt="" width={56} height={56}></Image>
        <h3>Our Core Values</h3>
        <div className={styles.grid}>
          <div>
            <h4>Real-time Business Results</h4>
            <p>Resources are optimized and appropriately deployed to meet immediate clients&apos; business needs</p>
          </div>
          <div>
            <h4>Flawless Project Execution</h4>
            <p>With focus on quality, efficiency and application of cutting-edge technology, we can deliver products to meet and exceed client&apos;s expectations</p>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Mnv