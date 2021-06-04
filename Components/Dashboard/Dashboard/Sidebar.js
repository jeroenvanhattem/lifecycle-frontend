import Link from 'next/link'

import 'font-awesome/css/font-awesome.min.css';
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
    <div className={styles.logo}>
      <span className="fa fa-bicycle"></span>
    </div>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <span className="fa fa-home"></span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.icon}>
          <Link href='/logout'><span className="fa fa-sign-out"></span></Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar