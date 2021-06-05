import { useRef, useState } from 'react'

import Navigation from './Navigation/Navigation'
import Introduction from './Introduction/Introduction'
import Image from './Image/Image'
import About from './About/About'
import Footer from './Footer/Footer'

import styles from './Home.module.css'

const Home = () => {
  const [introductionElement, setIntroductionElement] = useState(null)
  const [aboutElement, setAboutElement] = useState(null)

  const setIntroduction = (element) => {
    setIntroductionElement(element)
  }

  const setAbout = (element) => {
    setAboutElement(element)
  }

  return (
    <div className={styles.home}>
      <Navigation introductionElement={introductionElement} aboutElement={aboutElement} />
      <Introduction setElement={setIntroduction} />
      <Image />
      <About setElement={setAbout} />
      <Footer />
    </div>
  )
}

export default Home