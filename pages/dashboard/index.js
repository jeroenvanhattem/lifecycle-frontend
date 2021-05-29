import { connect } from 'react-redux';


import { getDevices } from '../../Functions/Firebase'

import Sidebar from '../../Components/Dashboard/Sidebar'
import Dashboard from '../../Components/Dashboard/Dashboard'

import styles from '../../styles/Dashboard.module.css'
import isLoggedIn from '../../Functions/IsLoggedIn'

const DashboardPage = (props) => {

  isLoggedIn({ isLoggedIn: props.isLoggedIn })

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>

      <div className={styles.dashboard}>
        <Dashboard redux={props} alarms={props.alarms} devices={props.devices} />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  user: state.auth.user
})

const getInitialProps = ({ store }) => { }

const getStaticProps = async () => {
  if (isLoggedIn) {
    const devices = await getDevices(isLoggedIn())
    const alarms = await getAlarms(isLoggedIn())
    return { devices, alarms }
  }
}

export default connect(mapStateToProps)(DashboardPage)
