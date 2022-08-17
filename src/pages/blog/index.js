import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { 
  mainDiv
} from '../index.module.css'

import NavBar from '../../components/nav_bar'

const BlogPage = ({ data }) => {
  return (
    <div className={mainDiv}>
      <NavBar></NavBar>
      <h1>Project Stories</h1>
      <main>
        <div>
          {
            data.allMdx.nodes.map(node => (
              <article key={node.id}>
                <h2>
                  <Link to={`/blog/${node.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>Posted: {node.frontmatter.date}</p>
              </article>
            ))
          }
        </div>
      </main>
    </div>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
        }
        slug
        id
        body
      }
    }
  }
`

export default BlogPage
