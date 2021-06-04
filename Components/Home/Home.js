import { useRef, useState } from 'react'

import Navigation from './Navigation/Navigation'
import Introduction from './Introduction/Introduction.js'
import About from './About/About.js'

import styles from './Home.module.css'

const Home = () => {
  const [introductionElement, setIntroductionElement] = useState(null)
  const [aboutElement, setAboutElement] = useState(null)

  const setIntroduction = (element) => {
    setIntroductionElement(element)
    console.log(introductionElement)
    console.log('Setting element')
  }

  const setAbout = (element) => {
    setAboutElement(element)
  }

  return (
    <div className={styles.home}>
      <Navigation introductionElement={introductionElement} aboutElement={aboutElement} />
      <Introduction setElement={setIntroduction} />
      <About setElement={setAbout} />
    </div>
  )
}

export default Home