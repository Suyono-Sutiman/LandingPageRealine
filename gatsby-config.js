module.exports = {
  siteMetadata: {
    siteUrl: `https://suyono-sutiman.github.io/LandingpageRealine/`,
    title: `Realine`,
    description: `Web Development & Digital Marketing Agency`,
    author: `Suyono`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `realine web development & digital marketing`,
        short_name: `realine`,
        start_url: `/`,
        background_color: `#242424`,
        theme_color: `#ffba00`,
        display: `minimal-ui`,
        icon: `src/images/realine.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "/LandingpageRealine",
}
