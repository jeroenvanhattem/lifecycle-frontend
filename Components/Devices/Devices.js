import { useEffect } from 'react'
import Device from './Device'
import NoDevice from './NoDevice'

import firebase from '../../Functions/Firebase'
import { getDevices } from '../../Functions/Firebase'

import styles from './Devices.module.css'
import { useState } from 'react'

const Devices = (props) => {
  const [devices, setDevices] = useState([])
  let devicesList = []

  useEffect(async () => {
    const getDevicesArray = async () => {
      const user = firebase.auth().currentUser.email
      const devicesArray = await getDevices(user)
      setDevices(devicesArray)
      return devicesArray
    }
    devicesList = await getDevicesArray()
  }, [])

  return (
    <div className={styles.devices}>
      <h1>Devices</h1>
    <div className={styles.devicesArea}>
      {devices.length ? devices.map((device) => {
        return <Device key={device.id} device={device} />
      }) : <NoDevice /> }
    </div>
    </div>
  )
}

export default Devices