import { useEffect, useState } from 'react'

import Device from './Device'
import NoDevice from './NoDevice'

import { getDevices } from '../../Functions/Firebase'

import styles from './Devices.module.css'

const Devices = (props) => {
  const [devices, setDevices] = useState([])

  useEffect(async () => {
    const getDevicesArray = async () => {
      const devicesArray = await getDevices()
      setDevices(devicesArray)
      return devicesArray
    }
    await getDevicesArray()
  }, [])

  return (
    <div className={styles.devices}>
      <h1>Devices</h1>
      <div className={styles.devicesArea}>
        {devices.length ? devices.map((device) => {
          return <Device key={device.id} device={device} />
        }) : <NoDevice />}
      </div>
    </div>
  )
}

export default Devices