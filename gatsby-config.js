module.exports = {
  siteMetadata: {
    siteUrl: 'https://justinwhall.com',
    title: 'Gatsby + WordPress Starter',
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          include: /images/
      }
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'data.justinwhall.com',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,

        includedRoutes: [
          "/*/*/acf",
          "/*/*/categories",
          "/*/*/posts",
          "/*/*/pages",
          "/*/*/tags",
          "/*/*/taxonomies",
          "/*/*/users",
        ],
        excludedRoutes: [
          "/*/*/acf/options/**"
        ],
        normalizer({ entities }) {

          const normalized = entities.map(node => {
            if (node.acf) {
               if (typeof node.acf.featured_banner !== 'object') {
                node.acf.featured_banner = {};
               }
            }
            return node;
          })


          return normalized;
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-20825598-9",
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}