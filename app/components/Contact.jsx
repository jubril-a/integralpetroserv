import styles from './contact.module.scss'
import Image from 'next/image'

const Contact = () => {
  return (
    <section className="section">
        <form action="" className={styles.form}>
            <h2 className={styles.h2}>Send us a Message</h2>
            <label htmlFor="">
                <span>Your Name</span>
                <input name="" type="text" />
            </label>
            <label htmlFor="">
                <span>Your Email</span>
                <input name="" type="email" />
            </label>
            <label htmlFor="">
                <span>Subject</span>
                <input name="" type="text" />
            </label>
            <label htmlFor="">
                <span>Your Message</span>
                <textarea name="" id=""></textarea>
            </label>
            <input type="submit" value="Send Message" />
        </form>
        <div className={styles.details}>
            <div className={styles.contacts}>
                <div>
                    <div className={styles.iconBox}><Image src="/images/building.png" width="24" height="24" alt=""/></div>
                    <h3>Visit our Office</h3>
                    <p>Unit 2, Mabel Terraces, Mabel way, Off Chevron Drive, Lekki-Epe Expressway, Lagos</p>
                </div>
                <div>
                    <div className={styles.iconBox}><Image src="/images/telephone.png" width="24" height="24" alt=""/></div>
                    <h3>Give us a Call</h3>
                    <p>taye.akewusola@gmail.com<br />taye.akewusola@integralpetroserv.com<br />taye.akewusola@ipetroserv.com</p>
                </div>
                <div>
                    <div className={styles.iconBox}><Image src="/images/email.png" width="24" height="24" alt=""/></div>
                    <h3>Send us an Email</h3>
                    <p>+234-803-213-7216</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact