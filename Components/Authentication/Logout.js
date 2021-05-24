import { useRouter } from 'next/router'
import { useEffect } from 'react'
import {firebase} from '../../Functions/Firebase'

const Logout = () => {
  const router = useRouter()

  useEffect(() => {
    firebase.auth().signOut()
    router.replace('/')
  }, [])

  return (
    <>
     <h1>Logging out...</h1>
    </>
  )
}

export default Logout