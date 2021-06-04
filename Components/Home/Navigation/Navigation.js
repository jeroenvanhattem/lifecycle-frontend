import { useRouter } from 'next/router'   
import scrollToElement from 'scroll-to-element'

import styles from './Navigation.module.css'

const Navigation = (props) => {
  const router = useRouter()

  const scroll = (element) => {
    console.log('Scrolling')
    scrollToElement(element)
    console.log(element)
  }

  const loginHandler = () => {
    router.push('/login')
  }

  return (
    <div className={styles.navigation}>
      <button onClick={() => {scroll(props.introductionElement)}}>Introduction</button>
      <button onClick={() => {scroll(props.aboutElement)}}>About</button>
      <button onClick={loginHandler}>Login</button>
    </div>
  )
}

export default Navigation