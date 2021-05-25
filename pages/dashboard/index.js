import Sidebar from '../../Components/Dashboard/Sidebar'
import Dashboard from '../../Components/Dashboard/Dashboard'

import styles from '../../styles/Dashboard.module.css'

const DashboardPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.dashboard}>
        <Dashboard />
      </div>
    </div>
  )
}

export default DashboardPage
