import Sidebar from '../../Components/Dashboard/Sidebar'
import Devices from '../../Components/Dashboard/Devices'

import styles from '../../styles/Dashboard.module.css'

const DashboardPage = () => {
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
