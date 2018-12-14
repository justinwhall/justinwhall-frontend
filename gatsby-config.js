module.exports = {
  siteMetadata: {
    title: 'Gatsby + WordPress Starter',
  },
  plugins: [
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
        baseUrl: 'justinwhall.wtf',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'http',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
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
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-purgecss',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
