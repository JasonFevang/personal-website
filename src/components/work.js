import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Work = () => {
  return (
    <div>
      <h2>Where I've Worked</h2>
      <h3>Software Developer | Team Lead - Better Way Lighting</h3>
      <p><b>2019 - Current</b></p>
      <ul>
        <li>
            Led a team of three software developers, in collaboration with 
            designers and upper management, to develop devices such as LED
            panels, DMX decoders, smart bulbs and more used on film sets 
            including Avatar 2 and Riverdale around the world
        </li>
        <li>
          Pioneered manual testing procedures and unit testing requirements 
          to avoid regressions and improve software quality company-wide
        </li>
      </ul>

      <h3>Software Developer | Co-op - Sierra Wireless</h3>
      <p><b>2018</b></p>
      <ul>
        <li>
          Enhanced the Sierra Wireless API to the Qualcomm cellular 
          communication chip for specialized Windows laptops from 
          various manufacturers in C++
        </li>
        <li>
          Tested Wake-On-Lan capabilities of the chipset on pre-release laptops
        </li>
      </ul>

      <h3>QA Engineer | Co-op - ACL Services</h3>
      <p><b>2016</b></p>
      <ul>
        <li>
          Developed our team’s automated test suite using Capybara and RSpec 
          which greatly improved test coverage
        </li>
        <li>
          Built a performance stress-testing tool in Ruby to generate database 
          entries through ACL’s API which allowed more thorough testing for 
          the quality assurance team
        </li>
      </ul>
    </div>
  )
}
export default Work
