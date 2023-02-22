import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../Components/Navbar'
import Main from '../Components/Main'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Moviez</title>
        <meta name="description" content="Movies app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Main />
      </main>
    </>
  )
}
