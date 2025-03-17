'use client'

import Image from 'next/image'
import styles from './navbar.module.scss'
import LinkButton from './LinkButton'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null)

  return (
    <div className={styles.navigation}>
        <nav className={styles.navbar}>
            <span className="logo">IPS</span>
            <button className={styles.mobile_btn}>
              <Image style={{position: 'relative', zIndex: '1000'}} src={isOpen ? "/images/close.png" : "/images/menu.png"} width="26" height="26" alt="menu" onClick={() => setIsOpen(!isOpen)}/>
            </button>
            <div className={isOpen ? `${styles.navlinks} ${styles.mobileVisible}` : styles.navlinks }>
                <a href="" className={styles.navlink}>Home</a>
                <a href="" className={styles.navlink}>About Us</a>
                <a href="" className={styles.navlink}>Our Services</a>
                <a href="" className={styles.navlink}>Management Team</a>
                <LinkButton label="Contact Us" />
            </div>
            
        </nav>
    </div>
  )
}

export default Navbar