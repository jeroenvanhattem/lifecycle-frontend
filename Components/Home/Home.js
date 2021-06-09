import { useRef, useState } from 'react'

import Navigation from './Navigation/Navigation'
import Introduction from './Introduction/Introduction'
import Image from './Image/Image'
import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

import styles from './Home.module.css'

const Home = () => {
  const [introductionElement, setIntroductionElement] = useState(null)
  const [aboutElement, setAboutElement] = useState(null)
  const [contactElement, setContactElement] = useState(null)

  const setIntroduction = (element) => {
    setIntroductionElement(element)
  }

  const setAbout = (element) => {
    setAboutElement(element)
  }

  const setContact = (element) => {
    setContactElement(element)
  }

  return (
    <div className={styles.home}>
      <Navigation introductionElement={introductionElement} aboutElement={aboutElement} contactElement={contactElement} />
      <Introduction setElement={setIntroduction} />
      <Image />
      <About setElement={setAbout} />
      <Contact setElement={setContact} />
      <Footer />
    </div>
  )
}

export default Home