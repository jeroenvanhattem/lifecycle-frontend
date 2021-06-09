import { useEffect } from 'react'

import ContactForm from './ContactForm'
import styles from './Contact.module.css'

const Contact = (props) => {
  useEffect(() => {
    const element = document.querySelector('#contact')
    props.setElement(element)
  }, [])

  return (
    <div id='contact' className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.title}>
            <h1>Contact</h1>
          </div>
        </div>
        <div className={styles.contactForm}>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact