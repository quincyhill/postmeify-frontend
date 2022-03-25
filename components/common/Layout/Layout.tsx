import { ReactNode } from 'react'
import { Header } from '..'

import Head from 'next/head'

export const siteTitle = 'Postmeify Project'

interface Props {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
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
      <main className="min-h-screen">{children}</main>
    </div>
  )
}
