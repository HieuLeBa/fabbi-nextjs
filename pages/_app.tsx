import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { EmptyLayout } from '@/components/layout'
import { AppPropsWithLayout } from '../models'
import { SWRConfig } from 'swr'
import axiosClient from '@/api/axios-client'

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createEmotionCache, theme} from '@/utils/index'

const clientSideEmotionCache = createEmotionCache()
function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const Layout = Component.Layout ?? EmptyLayout
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig value={{fetcher: url => axiosClient.get(url), shouldRetryOnError: false}}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
