import React from 'react'
import PropTypes from 'prop-types'
import { DiscussionEmbed } from "disqus-react";
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


export const BlogPostTemplate = ({
  content,
  title,
}) => (
  <section className="section single">
    <div className="container content">
      <div className="entry-content">
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  </section>
  )

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data;
  const disqusShortname = "justinwhall";
  const disqusConfig = {
    identifier: post.title.toLowerCase(),
    title: post.title.toLowerCase(),
  };

  const breadCrumbs = [
    {
      text: 'Blog',
      link: '/web-development-blog/',
    },
    {
      text: post.title,
      link: false,
    }
  ]

  return (
    <Layout breadCrumbs={breadCrumbs} title={post.title} date={post.date}>
      <Helmet title={`${post.title} | Blog`} />
      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        author={post.author}
      />
      <div className="disqus-wrap">
        <div className="container container-disqus">
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      </div>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
    }
  }
`
