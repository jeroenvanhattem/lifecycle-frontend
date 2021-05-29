import { useRouter } from 'next/router'
import { useEffect } from 'react'

const isLoggedIn = (props) => {
  const router = useRouter()

  console.log('Logged in? ' + props.isLoggedIn)
  
  useEffect(() => {
    if (!props.isLoggedIn) {
      router.replace('/login')
    }
  }, [])
}

export default isLoggedIn