import { useRouter } from 'next/router'
import firebase from '../../Functions/Firebase'

import styles from './Dashboard.module.css'

const DashboardContent = () => {
  const router = useRouter()

  return (
    <div className={styles.dashboard}>
      <div className={styles.title}>
        LifeCycle
      </div>
    </div>
  )
}

export default DashboardContent