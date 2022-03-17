import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import { useState } from 'react'
import useCookie from 'react-use-cookie'
import QRCode from 'qrcode.react'

const Home: NextPage = () => {
  const [ user ] = useState<string>(() =>
    Math.floor(46656 * Math.random()).toString(36).padStart(3, '0')
  );

  const [ address ] = useCookie('addr', `${user}@9k1.us`)

  return (
    <div className={styles.container}>
      <Head>
        <title>~</title>
        <meta name="description" content="9k1.us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <QRCode value={address} size={14*21} renderAs="svg" bgColor="#af0" fgColor="#22112a" />
        <span>{address}</span>
      </main>
    </div>
  )
}

export default Home
