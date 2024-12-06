const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { paginate } = require('gatsby-awesome-pagination')

const getOnlyPublished = edges =>
  _.filter(edges, ({ node }) => node.status === 'publish')

exports.createPages = ({ actions, graphql }) => {

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/preview/)) {
    page.matchPath = "/preview/:id/:nonce";

    // Update the page.
    createPage(page)
  }
}

/**
 * Enable source maps
 */
exports.onCreateWebpackConfig = ({ stage, actions }) => {
	if (stage === 'develop') {
		actions.setWebpackConfig({
			devtool: 'cheap-module-source-map'
		});
	}
};