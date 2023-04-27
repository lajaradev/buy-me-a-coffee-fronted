import Head from 'next/head'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <>
    <Head>
        <title>Buy Me a Coffee</title>
        <meta name="description" content="Buy Me a Coffee" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
        <Navbar />
    </main>
    </>
  )
}


