import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

export default class PostList extends React.Component {
  render() {
    const { posts } = this.props

    return (
      <section className="section">
        {posts.map(({ node: post }) => (
          <Link to={post.slug} key={post.id} className="post-link">
            <div className="container">
              <h2 className="entry-title">{post.title}</h2>
              <div className="entry-meta">
                <span className="posted-on">
                  <time className="entry-date">{post.date}</time>
                </span>
              </div>
              <div
                dangerouslySetInnerHTML={{
                    __html: post.excerpt
                  }}
              />
            </div>
          </Link>
        ))}
      </section>
    )
  }
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "MMMM DD, YYYY")
    slug
  }
`
