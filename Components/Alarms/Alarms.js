import { useEffect, useState } from 'react'
import Alarm from './Alarm'
import NoAlarm from './NoAlarm'

import { getAlarms } from '../../Functions/Firebase'

import styles from './Alarms.module.css'

const Alarms = (props) => {
  const [alarms, setAlarms] = useState([])
  let alarmsList = []

  useEffect(async () => {
    const getAlarmsArray = async () => {
      const alarmsArray = await getAlarms(props.redux)
      console.log(alarmsArray)
      setAlarms(alarmsArray)
      return alarmsArray
    }
    alarmsList = await getAlarmsArray()
    console.log('Alarms')
    console.log(alarmsList)
  }, [])

  return (
    <div className={styles.alarms}>
      <h1>Alarms</h1>
      <div className={styles.alarmsArea}>
        {alarms.length ? alarms.map((alarm) => {
          return <Alarm key={alarm.id} alarm={alarm} />
        }) : <NoAlarm />}
      </div>
    </div>
  )
}

export default Alarms