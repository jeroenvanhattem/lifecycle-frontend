import styles from './Image.module.css'

const Image = (props) => {

  return (
    <div className={styles.about}>
      <div className={styles.picture}>
        <img src='http://lewellness.com.vn/uploads/post/90.jpg' />
      </div>
    </div>
  )
}

export default Image