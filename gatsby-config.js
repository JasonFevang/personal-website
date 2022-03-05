module.exports = {
    siteMetadata: {
      title: `Jason Fevang`,
        siteUrl: `https://www.fevang.ca`,
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-remark-images",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/blog`,
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                // It's important to specify the maxWidth (in pixels)
                // of the content container as this plugin uses this
                // as the base for generating different widths of each
                // image.
                maxWidth: 590,
              },
            },
          ],
        },
      },
      "gatsby-transformer-sharp",
    ],
};
