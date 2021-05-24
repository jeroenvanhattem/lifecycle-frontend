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

const getDevices = () => {
  const ref = firebase.firestore().collection('users')
  const items = []
  ref.onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      items.push(doc.data())
    })
  })
  return items
}

export default firebase
export { getDevices }