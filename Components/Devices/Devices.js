import {getDevices} from '../../Functions/Devices'

import styles from './Devices.module.css'

const Devices = () => {
  const devices = getDevices()

  console.log(devices)

  return (
    <div className={styles.devices}>

    </div>
  )
}

export default Devices