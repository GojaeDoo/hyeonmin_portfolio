import Head from 'next/head'
import Intro from './intro/page'
import About from './about/page'
import Skills from './skills/page'
import Career from './career/page'
import Project from './project/page'
export default function Home() {
  return (
    <>
      <Head>
        <title>최현민 | 포트폴리오</title>
        <meta name="description" content="현민의 포트폴리오입니다" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <main>
        <Intro />
        <About />
        <Skills />
        <Career />
        <Project />
      </main>
    </>
  )
}
