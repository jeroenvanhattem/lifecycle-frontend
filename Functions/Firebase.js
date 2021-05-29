import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const getDevices = async (props) => {
  const devices = []

  const user = firebase.auth().currentUser.email

  if (user) {
    try {
      const response = await firebase
        .firestore()
        .collection('devices')
        .where('owner', '==', user)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            const device = {
              alias: doc.data().alias,
              battery: doc.data().battery,
              deviceID: doc.data().deviceID,
              lastAlarm: doc.data().lastAlarm,
              lastOnline: doc.data().lastOnline,
              owner: doc.data().owner,
              registerDateTime: doc.data().registerDateTime,
              source: doc.data().source,
            }
            devices.push(device)
          })
        })
    } catch (error) {
      console.log(error)
    }
  }

  return devices
}

const getAlarms = async (props) => {
  const alarms = []
  // const user = props.user
  const user = firebase.auth().currentUser.email

  const devices = await getDevices(user)
  
  if (user && devices) {
    devices.map(async (device) => {
      try {
        const response = await firebase
          .firestore()
          .collection('alarms')
          .where('deviceID', '==', device.deviceID)
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              const alarm = {
                active: doc.data().active,
                alarmDateTime: doc.data().alarmDateTime,
                deviceID: doc.data().deviceID,
                location: doc.data().location,
                source: doc.data().source
              }
              alarms.push(alarm)
            })
          })
      } catch (error) {
        console.log(error)
      }
    })
  }

  console.log('FIREBASE ALARMS')
  console.log(alarms)

  return alarms
}

export default firebase
export { getDevices, getAlarms }