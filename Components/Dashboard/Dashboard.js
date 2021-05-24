import { useRouter } from 'next/router'
import styles from './Dashboard.module.css'

const Dashboard = () => {
  const router = useRouter()

  const logoutHandler = () => {
    router.replace('/logout')
  }

  return (
    <div className={styles.dashbaord}>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Dashboard