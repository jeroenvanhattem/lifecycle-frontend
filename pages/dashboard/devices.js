import Sidebar from '../../Components/Dashboard/Sidebar'
import Devices from '../../Components/Devices/Devices'
import isLoggedIn from '../../Functions/IsLoggedIn'

import styles from '../../styles/Dashboard.module.css'

const DashboardPage = () => {
  isLoggedIn()

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.dashboard}>
        <Devices />
      </div>
    </div>
  )
}

export default DashboardPage
