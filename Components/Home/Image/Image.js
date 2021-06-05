import styles from './Image.module.css'

const About = (props) => {

  return (
    <div className={styles.about}>
      <div className={styles.picture}>
        <img src='http://lewellness.com.vn/uploads/post/90.jpg' />
      </div>
    </div>
  )
}

export default About