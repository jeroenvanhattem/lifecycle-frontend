import firebase from '../../Functions/Firebase'

import Devices from '../Devices/Devices'
import Alarms from '../Alarms/Alarms'

import styles from './Dashboard.module.css'

const DashboardContent = (props) => {
  return (
    <div className={styles.dashboard}>
      
      <div className={styles.upperRow}>
        <div className={styles.title}>
          LifeCycle
        </div>
      </div>
      
      <div className={styles.mainRow}>
        <div className={styles.alarms}>
          <Alarms redux={props.redux} />
        </div>
        <div className={styles.devices}>
          <Devices redux={props.redux} />
        </div>
      </div>
    </div>
  )
}

export default DashboardContent