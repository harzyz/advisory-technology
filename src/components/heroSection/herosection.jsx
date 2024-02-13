import styles from './heroSection.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";

const Herosection = () => {

  const [hamburgerMenu, setHamburgeMenu] = useState(false)

  const toggleOpen =()=> {
    setHamburgeMenu(true)
  }
  const toggleClose =()=> {
    setHamburgeMenu(false)
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.contact}>
        <div className={styles.phoneTime}>
          <div className={styles.phonumber}>
            <span className={styles.phoneicon}>
              <FaPhoneAlt />
            </span>
            <p>1.800.555.1212</p>
          </div>
          <div className={styles.timezone}>
            <span className={styles.globeicon}>
              <BsGlobe />
            </span>
            <p>LONDON, UK  T14;43:</p>
          </div>
        </div>
        <p>LOGIN</p>
      </div>
      <nav className={styles.navbar}>
        <p>FINANCIAL TECHNOLOGY ADVISORS</p>
        <ul className={hamburgerMenu ? styles.navlist : styles.close}>
          <li>HOME</li>
          <li>CLIENTS</li>
          <li>PARTNERS</li>
          <li>SERVICES</li>
          <li>CONTACT</li>
          <IoCloseCircleOutline onClick={toggleClose} className={styles.closeIcon} />
        </ul>
        <GiHamburgerMenu onClick={toggleOpen} className={styles.hamburgermenu} />
      </nav>
      <div className={styles.container}>
        <h3>WHAT DIFFERENTIATES US FROM OTHER ADVISERS ?</h3>
        <h2>OUR GENUINE MOTIVATION TO SEE OUR CLIENTS SUCCEED.</h2>
      </div>
    </section>
  )
}

export default Herosection
