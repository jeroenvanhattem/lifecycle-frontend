import { useRouter } from 'next/router'
import scrollToElement from 'scroll-to-element'

import Logo from '../../../Assets/dark-logo.svg'

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
      <div className={styles.logo}>
        <Logo className={styles.logoComponent} />
      </div>
      <div className={styles.links}>
        <ul>
          <li><a onClick={() => { scroll(props.introductionElement) }}>Introduction</a></li>
          <li><a onClick={() => { scroll(props.aboutElement) }}>About</a></li>
        </ul>
      </div>
      <div className={styles.login}>
        <a onClick={loginHandler}>Login</a>
      </div>
    </div>
  )
}

export default Navigation