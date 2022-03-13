import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { heroDiv, offWhiteText, highlightText, orangeTextTrans, offWhiteTextTrans, aquaTextTrans, greenTextTrans, yellowTextTrans, tab, mainDiv, code, title 
} from './hero.module.css'


const Hero = () => {
  return (
    <div className={heroDiv}>
      <code>
        <span className={aquaTextTrans}>#include </span> 
        <span className={greenTextTrans}>&lt;stdio.h&gt;</span></code>
      <br></br>
      <br></br>
      <code>
        <span className={yellowTextTrans}>int </span> 
        <span className={offWhiteTextTrans}>main()&#123;</span>
      </code>

      <br></br>
      <code className={tab}>
        <span className={offWhiteTextTrans}>printf(</span>
        <span className={greenTextTrans}>"</span>
      </code>
      <span className={title}>
        <span className={offWhiteText}>Hi,</span> I'm Jason Fevang
      </span>
      <code className={orangeTextTrans}>\n</code>
      <code className={greenTextTrans}>"</code>
      <code className={offWhiteTextTrans}>);</code>
      <br></br>

      <code className={offWhiteTextTrans}>&#125;</code>
    </div>
  )
}
export default Hero
