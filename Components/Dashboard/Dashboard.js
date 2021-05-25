import { useRouter } from 'next/router'
import firebase from '../../Functions/Firebase'

import styles from './Dashboard.module.css'
import Devices from '../Devices/Devices'

const DashboardContent = (props) => {
  const router = useRouter()

  return (
    <div className={styles.dashboard}>
      <div className={styles.title}>
        LifeCycle
      </div>

      <div className={styles.devices}>
        <Devices />
      </div>
    </div>
  )
}

export default DashboardContent