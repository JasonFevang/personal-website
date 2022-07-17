import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const About = () => {
  return (
    <div>
      <h2>About Me</h2>
      <p>
        Hello! My name is Jason and I enjoy programming computer's at their 
        lowest level. My interest in computer engineering topics started 
        as a child learning redstone mechanics in Minecraft, and I've 
        pursued computer engineering and software development ever since. 
        Since beginning my degree I've been enamoured with programming 
        in resource-constrained environments. The challenge of writing software
        limited by computing resources motivates me.
      </p>
      <p>
        Fast-forward to today and I've had the privilege to work with plenty 
        of computers large and small, developing solutions in the led lighting 
        industry and beyond. My main focus is building embedded 
        solutions in the film led lighting space and have detailed experience in 
        pwm control, microcontrollers and embedded design. I primarily 
        develop on the ESP32, but have experience with other 
        microcontrollers such as the stm8 and stm32.
      </p>
      <p>
        I have many interests and in my personal time enjoy exploring 
        computing topics outside of what I use in a typical workday, 
        including linux configuration with Arch, the Rust programming 
        language, and open source projects. Even building this site with 
        React.js and Gatsby.
      </p>
    </div>
  )
}
export default About
