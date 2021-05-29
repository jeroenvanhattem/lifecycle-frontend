import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

const HomePage = () => {
  const router = useRouter()
  const loginHandler = () => {
    router.push('/login')
  }
  return (
    <div className={styles.container}>
      <h1>HomePage</h1>
      <button onClick={loginHandler}>Login</button>
    </div>
  )
}

export default HomePage