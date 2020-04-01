import React from 'react'
import Layout from '../components/Layout'

const breadCrumbs = [
  {
    text: 'About',
    link: false,
  },
]

const About = () => (
  <Layout title="About" breadCrumbs={breadCrumbs}>
    <div className="container">
      <h1>About</h1>
      <p>
        {`I'm a Senior Software Developer at `}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://sendgrid.com"
        >
          <strike>SendGrid</strike>
        </a>{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://alley.co"
        >
          Alley
        </a>{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.justinwhall.com/"
        >
          Freelancer,
        </a>{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.littlebot.io"
        >
          Plugin Developer,
        </a>
        {' and half of '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://staticfuse.com"
        >
          Static Fuse
        </a>
        {`. I'm especially interested in the headless CMS space, Gatsby and GraphQL. `}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/justinwhall/justinwhall-frontend"
        >
          This website{' '}
        </a>{' '}
        {`was built with WordPress + Gatsby + AWS. ❤️`}
      </p>
      <p>
        {`Solving real-world problems with software is my favorite part of my job. It's not only challenging but exceedingly rewarding. I love what I do.`}
      </p>
      <p>
        {'Offline, I live just outside of Denver, CO in '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/p/BWjcatODFID/?taken-by=justinwindhall"
        >
          Golden
        </a>
        {`. I'm an `}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/p/BCEyvSjDgj-/?taken-by=justinwindhall"
        >
          avid mountain biker,{' '}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/p/BPjVFP0lSq7/?taken-by=justinwindhall"
        >
          skier
        </a>
        {' and '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.porchdrinking.com/wp-content/uploads/2016/09/how-to-enjoy-pumpkin-beer.jpg"
        >
          {' '}
          opinionated beer drinker
        </a>
        {'. I also share a birthday with '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/p/Ba9ypNrDD0J/?taken-by=justinwindhall"
        >
          my sister
        </a>
        .
      </p>
      <p>
        Say 👋 on Twitter <a href="https://twitter/justinwhall">@justinwhall</a>
      </p>
      <div
        style={{
          gridTemplateColumns: 'auto auto auto',
          display: 'grid',
          gridColumnGjap: '20px',
          marginBottom: '50px',
        }}
      >
        <img src="https://littlebot.io/justin-w-hall-2.png" />
        <img src="https://littlebot.io/justin-w-hall-3.png" />
        <img src="https://littlebot.io/justin-w-hall.png" />
      </div>
    </div>
  </Layout>
)

export default About
