import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  internalLink,
} from '../pages/index.module.css' // my css linking is so trash. Think I'm gonna forgo css modules and have a single css page. It's simpler this way

const ProjectSummary = () => {
  return (
    <div>
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
    </div>
  )
}
export default ProjectSummary
