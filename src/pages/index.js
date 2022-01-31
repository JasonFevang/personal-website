import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Waddup this is a website I made following a tutorial on the internet.</p>
      <StaticImage
        alt="Me and Maddy :)"
        src="../images/maddy.jpg"
        width={200}
        height={300}
        object-fit="scale-down"
        objectPosition="right top"
      />
    </Layout>
  )
}
export default IndexPage
