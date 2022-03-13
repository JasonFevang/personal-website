import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { titleDiv, projectPeekDiv, internalLink, basicText, heroDiv, offWhiteText, highlightText, orangeTextTrans, offWhiteTextTrans, aquaTextTrans, greenTextTrans, yellowTextTrans, tab, mainDiv, code, title 
} from './hero.module.css'


const Hero = () => {
  return (
    <div className={heroDiv}>
      <div className={titleDiv}>
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

      <p className={basicText}> 
        I'm an embedded developer with experience with Espressif and STM 
        microcontrollers. Currently, I'm focused on developing custom 
        lighting solutions adapted to the film industry in Vancouver at 
        Better Way Lighting.
      </p>

      <div className={projectPeekDiv}>
        <p>
          Check out my latest project!
        </p>
        <Link className={internalLink} to="/">
          Hacking the stm8
        </Link>
      </div>

    </div>
  )
}
export default Hero
