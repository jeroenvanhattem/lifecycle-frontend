import Logo from '../../../Assets/dark-logo.svg'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>

      <div className={styles.upper}>
        <div className={styles.logo}>
          <Logo className={styles.logoComponent} />
        </div>
        <div className={styles.info}>
          <div className={styles.empty}>
            
          </div>
          <div className={styles.contact}>
            <ul>
              <li><b>Contact us</b></li>
              <li>Kalverstraat 3, Amsterdam, 3293AK</li>
              <li>0674738392</li>
              <li>info@lifecycle.com</li>
            </ul>
          </div>

          <div className={styles.socials}>
            <ul>
              <li><b>Follow us</b></li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.lower}>
        <div className={styles.copyright}>
          <p>© 2021 LifeCycle. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer