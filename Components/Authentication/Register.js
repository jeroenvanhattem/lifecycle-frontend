import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Store/Actions/AuthActions'
import firebase from '../../Functions/Firebase'
import { getDevices } from '../../Functions/Firebase'

import styles from './Register.module.css'

const Register = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { isLoggedIn } = useSelector((state) => state.auth.isLoggedIn)

  const registerHandler = async (event) => {
    event.preventDefault()

    try {
      // Login call here
      await firebase
        .auth()
        .createUserWithEmailAndPassword(firstName, lastName, email, password)

      dispatch(login(firebase.auth().currentUser))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Login</h1>
      <div className="inputBox">
        <h3>Register</h3>
        <form onSubmit={registerHandler}>
          <input
            type='text'
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder='First name'
          />
          <input
            type='text'
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder='Last name'
          />
          <input
            type='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder='Email'
          />
          <input
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder='Password'
          />
          <button>Register</button>
        </form>
      </div>
    </>
  )
}

export default Register