import { useRouter } from 'next/router'
import { useEffect } from 'react'
import firebase from '../../Functions/Firebase'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../Store/Actions/AuthActions'

const Logout = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const { isLoggedIn } = useSelector((state) => state.auth.isLoggedIn)


  useEffect(() => {
    firebase.auth().signOut()
    dispatch(logout())
    router.replace('/')
  }, [])

  return (
    <>
     <h1>Logging out...</h1>
    </>
  )
}

export default Logout