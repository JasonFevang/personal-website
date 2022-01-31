module.exports = {
    siteMetadata: {
      title: `Jason Fevang`,
        siteUrl: `https://www.fevang.ca`,
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `blog`,
          path: `${__dirname}/blog`,
        }
      },
      "gatsby-plugin-mdx",
      "gatsby-transformer-sharp",
    ],
};
