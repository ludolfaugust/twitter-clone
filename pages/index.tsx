import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Twitter Clone TS</title>
      </Head>
      <main>
          <Sidebar />
      </main>
      
    </>
  )
}

export default Home
