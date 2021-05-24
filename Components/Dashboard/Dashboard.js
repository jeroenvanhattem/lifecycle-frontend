import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import firebase from '../../Functions/Firebase'

import Sidebar from './Sidebar'
import DashboardContent from './DashboardContent'

import styles from './Dashboard.module.css'

const Dashboard = () => {

  const { isLoggedIn } = useSelector((state) => state.auth.isLoggedIn)


  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.dashboardContent}>
        <DashboardContent />
      </div>
    </div>
  )
}

export default Dashboard
