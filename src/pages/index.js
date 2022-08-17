import * as React from 'react'
import { 
  mainDiv
} from './index.module.css'

import NavBar from '../components/nav_bar'
import Hero from '../components/hero'
import About from '../components/about'
import Work from '../components/work'
import ProjectSummary from '../components/project_summary'

const IndexPage = () => {
  return (
    <div className={mainDiv}>
      <NavBar></NavBar>
      <title>Jason Fevang</title>
      <main>
        <Hero></Hero>
        <About></About>
        <Work></Work>
        <ProjectSummary></ProjectSummary>
      </main>
    </div>
  )
}
export default IndexPage
