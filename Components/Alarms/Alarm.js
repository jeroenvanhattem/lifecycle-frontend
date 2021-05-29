import Link from 'next/link'

import styles from './Alarm.module.css'
 
const Alarm = (props) => {
  console.log('Creating alarm component')
  
  const date = props.alarm.alarmDateTime.toDate().toLocaleDateString("nl-NL")
  const time = props.alarm.alarmDateTime.toDate().toLocaleTimeString("nl-NL")
  const location = `https://google.com/maps?q=${props.alarm.location.latitude},${props.alarm.location.longitude}`
  const styleNames = props.alarm.active ? styles.activeAlarm : styles.alarm

  return (
    <div className={styleNames}>
      <h1>Alarm</h1>
      <h3>Date: {date}</h3>
      <h3>Time: {time}</h3>
      <h3><a href={location} target='_blank'>Click here for location</a></h3>
      {props.alarm.active && <p className={styles.activeText}>ACTIVE</p>}
    </div>
  )
}

export default Alarm