import { useRouter } from 'next/router'
import { useEffect } from 'react'

const isLoggedIn = (props) => {
  const router = useRouter()

  useEffect(() => {
    if (!props.isLoggedIn) {
      router.replace('/login')
    }
  }, [])
}

export default isLoggedIn