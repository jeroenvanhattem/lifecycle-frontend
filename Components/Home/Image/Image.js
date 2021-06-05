import Image from 'next/image'

import styles from './Image.module.css'

const About = (props) => {

  return (
    <div className={styles.about}>
      <div className={styles.picture}>
        <Image
          src='http://lewellness.com.vn/uploads/post/90.jpg'
          width='80%'
          height='80%'
        />
      </div>
    </div>
  )
}

export default About