import Intro from '../src/components/intro/Intro.container'
import About from '../src/components/about/About.container'
import Skills from '../src/components/skills/Skills.container'
import Career from '../src/components/career/Career.container'
import Project from '../src/components/project/Project.container'

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Skills />
      <Career />
      <Project />
    </main>
  )
} 