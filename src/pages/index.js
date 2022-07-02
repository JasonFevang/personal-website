import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { 
  internalLink, 
  offWhiteText, 
  highlightText, 
  orangeTextTrans, 
  offWhiteTextTrans, 
  aquaTextTrans, 
  greenTextTrans, 
  yellowTextTrans, 
  tab, 
  mainDiv, 
  code, 
  subtitle, 
  title, 
  p, 
  opener, 
} from './index.module.css'

import NavBar from '../components/nav_bar'
import Hero from '../components/hero'
import About from '../components/about'
import Work from '../components/work'
import ProjectSummary from '../components/project_summary'

// Temporarily removed opener
//<p className={opener}>
//  <span className={highlightText}>&gt;</span> 
//  I program small computers.
//</p>

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

        <code>jason@fevang.ca:~$</code>
      </main>
    </div>
  )
}
export default IndexPage
