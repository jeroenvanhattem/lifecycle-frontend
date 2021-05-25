import firebase from './Firebase'

const getDevices = async () => {
  console.log(firebase.auth().currentUser.email)
  const devices = []
  const response = await firebase
    .firestore()
    .collection('devices')
    .where('owner', '==', firebase.auth().currentUser.email)
    .get()
    .then((snapshot) => {
      console.log('Snapshot')
      console.log(snapshot)
      snapshot.forEach((doc) => {
        console.log(doc.data());
        devices.push(doc.data())
      })
    })

  return devices
}

export { getDevices }