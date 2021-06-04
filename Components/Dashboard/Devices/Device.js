import styles from './Device.module.css'

const Device = (props) => {
  return (
    <div className={styles.device}>
      <h1>{props.device.alias}</h1>
      <h3>Battery: {props.device.battery}</h3>
    </div>
  )
}

export default Device