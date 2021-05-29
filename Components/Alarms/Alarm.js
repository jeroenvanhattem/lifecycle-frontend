import styles from './Alarm.module.css'

const Alarm = (props) => {
  console.log('ALARM PROPS')
  console.log(props)
  return (
    <div className={styles.alarm}>
      <h1>Alarm</h1>
      <h3>{props.alarm.alarmDateTime}</h3>
      <h3>Location: {props.alarm.location}</h3>
      {props.alarm.active && <p className={styles.active}>ACTIVE</p>}
    </div>
  )
}

export default Alarm