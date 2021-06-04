import { connect } from 'react-redux';

import Sidebar from '../../Components/Dashboard/Dashboard/Sidebar'
import Dashboard from '../../Components/Dashboard/Dashboard'

import styles from '../../styles/Dashboard.module.css'
import isLoggedIn from '../../Functions/IsLoggedIn'

const DashboardPage = (props) => {
  isLoggedIn({ isLoggedIn: props.isLoggedIn })
  console.log('DASHBOARD')
  console.log(props)
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

const getInitialProps = async ({ store }) => { 
}

export default connect(mapStateToProps)(DashboardPage)
