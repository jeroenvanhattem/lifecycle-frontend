import { useEffect, useRef } from 'react'

import 'font-awesome/css/font-awesome.min.css';

import styles from './Introduction.module.css'

const Introduction = (props) => {

  useEffect(() => {
    const element = document.querySelector('#introduction')
    props.setElement(element)
  }, [])

  return (
    <div id='introduction' className={styles.introduction}>
      <div className={styles.text}>
        <div className={styles.title}>
          <h1>Lorem ipsum </h1>
        </div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nunc imperdiet eros id dui vulputate dictum. Quisque sit amet congue metus.
        </div>
      </div>

      <div className={styles.functions}>

        <div className={styles.function}>
          <div className={styles.functionLogo}>
            <span className="fa fa-bicycle"></span>
          </div>
          <div className={styles.functionTitle}>
            <h3>Lorem ipsum</h3>
          </div>
          <div className={styles.functionDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc imperdiet eros id dui vulputate dictum. Quisque sit amet congue metus.
          </div>
        </div>

        <div className={styles.function}>
          <div className={styles.functionLogo}>
            <span className="fa fa-home"></span>
          </div>
          <div className={styles.functionTitle}>
            <h3>Lorem ipsum</h3>
          </div>
          <div className={styles.functionDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc imperdiet eros id dui vulputate dictum. Quisque sit amet congue metus.
          </div>
        </div>

        <div className={styles.function}>
          <div className={styles.functionLogo}>
            <span className="fa fa-phone"></span>
          </div>
          <div className={styles.functionTitle}>
            <h3>Lorem ipsum</h3>
          </div>
          <div className={styles.functionDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc imperdiet eros id dui vulputate dictum. Quisque sit amet congue metus.
          </div>
        </div>

        <div className={styles.function}>
          <div className={styles.functionLogo}>
            <span className="fa fa-microphone"></span>
          </div>
          <div className={styles.functionTitle}>
            <h3>Lorem ipsum</h3>
          </div>
          <div className={styles.functionDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc imperdiet eros id dui vulputate dictum. Quisque sit amet congue metus.
          </div>
        </div>

      </div>
    </div>
  )
}

export default Introduction