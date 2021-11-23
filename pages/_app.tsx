import 'antd/dist/antd.css'
import type { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import { queryClient } from '../components/functional/queryClient'
import { QueryClientProvider } from 'react-query'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider session={session}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  )
}

export default App
