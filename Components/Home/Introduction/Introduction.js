import { useEffect, useRef } from 'react'

import styles from './Introduction.module.css'

const Introduction = (props) => {

  useEffect(() => {
    const element = document.querySelector('#introduction')
    props.setElement(element)
  }, [])

  return (
    <div id='introduction' className={styles.introduction}>

    </div>
  )
}

export default Introduction