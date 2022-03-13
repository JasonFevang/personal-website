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
  basicText 
} from './index.module.css'

import NavBar from '../components/nav_bar'
import Hero from '../components/hero'

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
        <p className={basicText}> 
          I'm an embedded developer with experience with Espressif and STM 
          microcontrollers. Currently, I'm focused on developing custom 
          lighting solutions adapted to the film industry in Vancouver at 
          Better Way Lighting.
        </p>

        <p>
          Check out my latest project!
        </p>
        <Link className={internalLink} to="/">
          Hacking the stm8
        </Link>

        <h2>About Me</h2>
        <p>
          Hello! My name is Jason and I enjoy programming computer's at their 
          lowest level. My interest in computer engineering topics started 
          back as a child learning redstone mechanics in Minecraft, and I've 
          pursued computer engineering and software devleopment ever since. 
          Ever since beginning my degree I've been enamoured with programming 
          in resource constrained environments. The challenge of being limited 
          by computing resources or power usage motivates me.
        </p>
        <p>
          Fast-forward to today, and I've had the privilege to work with plenty 
          of computers large and small, developing solutions in the lighting 
          industry, and beyond. My main focus these days is building embedded 
          solutions in the film lighting space and have detailed experience in 
          pwm control, microcontrollers and embedded design. I primarily 
          develop on the ESP32, but have experience with other 
          microcontrollers such as the stm8 and stm32.
        </p>
        <p>
          I have many interests and in my personal time enjoy exploring 
          computing topics outside of what I use in a typical workday, 
          including linux configuration with Arch, the Rust programming 
          language, and open source projects(that's not really true yet). Even 
          building this site with React.js and Gatsby.js
        </p>
        <h2>Where I've worked</h2>

        <h3>Better Way Lighting</h3>
        <p><b>Oct 2019 - Present</b></p>
        <ul>
          <li>
            Develop embedded products for the film lighting industry using a 
            diverse array of products and technologies
          </li>
          <li>
            Debug issues related to embedded development involving debuggers
          </li>
          <li>
            Extensive use of FreeRTOS to design applications
          </li>
          <li>
            Use software design principles to develop performant, extendable 
            and agile application designs
          </li>
        </ul>

        <h3>Sierra Wireless | Co-op</h3>
        <p><b>Oct 2019 - Present</b></p>
        <ul>
          <li>
            Develop embedded products for the film lighting industry using a 
            diverse array of products and technologies
          </li>
          <li>
            Debug issues related to embedded development involving debuggers
          </li>
          <li>
            Extensive use of FreeRTOS to design applications
          </li>
          <li>
            Use software design principles to develop performant, extendable 
            and agile application designs
          </li>
        </ul>

        <h2>Some Things I've Built</h2>
        <h3>Light Hoops</h3>
        <p>
          Indoor basketball hoop modified to light up green when a basket is 
          scored, and light up red when a shot is missed.
        </p>
        <StaticImage
          alt="Lightup basketball hoop"
          src="../images/maddy.jpg" width={200}
          height={300}
          object-fit="scale-down"
          objectPosition="right top"
        />
        <Link className={internalLink} to="/">See more...</Link>

        <h3>This Website</h3>
        <p>
          Modern static website developed with Gastby.js, a static website 
          framework built on React.js. As an embedded software engineer I had 
          plenty to learn developing a modern web app
        </p>
        <StaticImage
          alt="Lightup basketball hoop"
          src="../images/maddy.jpg" width={200}
          height={300}
          object-fit="scale-down"
          objectPosition="right top"
        />
        <Link className={internalLink} to="/">See more...</Link>
        <code>jason@fevang.ca:~$</code>
      </main>
    </div>
  )
}
export default IndexPage
