import { ReactNode } from 'react'
import { Header } from '../common'
import { Provider } from 'react-redux'
import store from '../../lib/redux/store'

import Head from 'next/head'

export const siteTitle = 'Postmeify Project'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <Provider store={store}>
      <div className="flex flex-col bg-white text-slate-900">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Official site of Postmeify" />
          <meta name="og:title" content={siteTitle} />
          <title>Postmeify</title>
        </Head>
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <div className="min-h-screen bg-slate-50">{children}</div>
      </div>
    </Provider>
  )
}
