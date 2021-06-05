import { useEffect, useRef } from 'react'

import styles from './About.module.css'

const About = (props) => {
  useEffect(() => {
    const element = document.querySelector('#about')
    props.setElement(element)
  }, [])

  return (
    <div id='about' className={styles.about}>
    </div>
  )
}

export default About