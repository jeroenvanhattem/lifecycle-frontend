import { Provider, useDispatch } from 'react-redux'
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

const getInitialProps = async ({Component, ctx}) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //Anything returned here can be accessed by the client
  return {pageProps: pageProps};
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)
