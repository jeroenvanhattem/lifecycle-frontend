import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Store/Actions/AuthActions'
import firebase from '../../Functions/Firebase'
import styles from './Login.module.css'

const Login = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { isLoggedIn } = useSelector((state) => state.auth.isLoggedIn)

  const loginHandler = async (event) => {
    event.preventDefault()

    try {
      // Login call here
      await firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
      dispatch(login(firebase.auth().currentUser.email))
      router.replace('/dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <div className="inputBox">
        <form onSubmit={loginHandler}>
          <h3>Login</h3>
          <input
            type='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder='Email address'
          />
          <input
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder='Password'
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login