import Image from 'next/image';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.topWrapper}>
            <div className={`constraint-I ${styles.footer_top}`}>
                <div>
                    <p className={styles.name}>Integral PetroServ ltd.</p>
                    <nav className={styles.links}>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Services</a>
                        <a href="">Team</a>
                        <a href="">Contact</a>
                        <a href="">Mission</a>
                        <a href="">Vision</a>
                        <a href="">Core Values</a>
                    </nav>
                    <div className={styles.socials}>
                        <a href="" className={styles.imgLink}><Image src="/images/linkedin.png" width="20" height="20" alt="linkedin icon" /></a>
                        <a href="" className={styles.imgLink}><Image src="/images/facebook.png" width="20" height="20" alt="facebook icon" /></a>
                        <a href="" className={styles.imgLink}><Image src="/images/twitter.png" width="20" height="20" alt="twitter icon" /></a>
                        <a href="" className={styles.imgLink}><Image src="/images/instagram.png" width="20" height="20" alt="instagram icon" /></a>
                    </div>
                </div>
                <div>
                    <p><span>Address:<br /> </span>Unit 2, Mabel Terraces, Mabel way, Off Chevron Drive, Lekki-Epe Expressway, Lagos</p>
                    <p><span>Phone:<br /> </span>+2348032127216, +2348032127216</p>
                    <p><span>Email:<br /> </span>taye.akewusola@gmail.com, taye.akewusola@integralpetroserv.com, taye.akewusola@ipetroserv.com</p>
                </div>
            </div>
        </div>
        <div className={`constraint-I ${styles.footer_bottom}`}>
            <p>&copy; 2020 Intregral PetroServ Ltd. All Rights Reserved</p>
            <a href="#top" className={styles.imgLink}><Image src="/images/arrow.png" width="20" height="20" alt="instagram icon" /></a>
        </div>
    </footer>
  )
}

export default Footer