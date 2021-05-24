import { useRouter } from 'next/router'

import styles from './DashboardContent.module.css'

const DashboardContent = () => {
  const router = useRouter()

  const logoutHandler = () => {
    router.replace('/logout')
  }

  return (
    <div className={styles.dashboardContent}>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default DashboardContent