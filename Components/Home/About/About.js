import { useEffect, useRef } from 'react'

import styles from './About.module.css'

const About = (props) => {
  useEffect(() => {
    const element = document.querySelector('#about')
    props.setElement(element)
  }, [])

  return (
    <div id='about' className={styles.about}>
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.icon}>
            <span className="fa fa-bicycle"></span>
          </div>
          <div className={styles.title}>
            <h1>Lorem ipsum</h1>
          </div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc imperdiet eros id dui vulputate dictum. Quisque sit amet congue metus.
        </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentRow}>
            <div className={styles.contentText}>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc imperdiet eros id dui vulputate dictum. Quisque sit amet congue metus.
              </h3>
            </div>
            <div className={styles.contentIcon}>
              <span className="fa fa-bicycle"></span>
            </div>
          </div>
          <div className={styles.contentRow}>
            <div className={styles.contentIcon}>
              <span className="fa fa-bicycle"></span>
            </div>
            <div className={styles.contentText}>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc imperdiet eros id dui vulputate dictum. Quisque sit amet congue metus.
              </h3>
            </div>
          </div>
          <div className={styles.contentRow}>
            <div className={styles.contentText}>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc imperdiet eros id dui vulputate dictum. Quisque sit amet congue metus.
              </h3>
            </div>
            <div className={styles.contentIcon}>
              <span className="fa fa-bicycle"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About