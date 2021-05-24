import { Provider, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { createWrapper } from 'next-redux-wrapper'
import store from '../Store/Store'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
