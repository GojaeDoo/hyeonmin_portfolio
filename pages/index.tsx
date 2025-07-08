import Head from 'next/head'
import IntroContainer from '../src/components/intro/Intro.container'

export default function Home() {
  return (
    <>
      <Head>
        <title>최현민 | 포트폴리오</title>
        <meta name="description" content="현민의 포트폴리오입니다" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <IntroContainer />
      </main>
    </>
  )
}
