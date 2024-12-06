import React from 'react'
import Helmet from 'react-helmet'
import MenuOverlay from '../components/MenuOverlay'
import Social from '../components/Social'
import Faqs from '../components/Faqs'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Mountain from '../images/mtn.svg'
import Heart from '../images/heart.svg'
import '../sass/milligram.sass'

const title = [
  'Front End Engineer',
  'UIUX Advocate',
  'Software Builder',
  'Open Source Contributor',
  'Mountain Biker',
  'Agile Participant',
]
export default class Home extends React.Component {
  state = {
    mtnOpacity: 0,
    hearClass: '',
    index: 0,
    title: title[0],
  }

  tick() {
    const { index } = this.state
    const nextIndex = title.length === index + 1 ? 0 : index + 1

    this.setState(prevState => ({
      index: nextIndex,
      title: title[nextIndex],
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 2000)

    this.mtn = setTimeout(() => {
      this.setState({
        mtnOpacity: 1,
      })
    }, 100)

    this.heart = setTimeout(() => {
      this.setState({
        heartClass: 'start',
      })
    }, 700)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    clearTimeout(this.mtn)
    clearTimeout(this.heart)
  }

  scrollToMore = () => {
    this.more.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  render() {
    return (
      <React.Fragment>
        <Helmet title="Justin W Hall | Denver & Boulder Colorado Front End Software Engineer" />
        <MenuOverlay />
        <main>
          <div className="intro">
            <div className="hello">
              <div className="hi">Hello!</div>
              <div className="my-name">My name is Justin Windsor Hall</div>
            </div>

            <div className="secondary">
              I'm a Denver, CO based{' '}
              <span className="l-blue">{this.state.title}</span>
            </div>
            <div className="mountain">
              <Mountain style={{ opacity: this.state.mtnOpacity }} />
            </div>
            <div className={`heart ${this.state.heartClass}`}>
              <div className="secondary code">Code</div>
              <Heart />
            </div>
            <div className="see-more" onClick={this.scrollToMore}>
              <svg className="arrow">
                <path className="a1" d="M0 0 L15 16 L30 0" />
              </svg>
            </div>
          </div>
          <div
            ref={more => (this.more = more)}
            className="more-about p-top-bottom"
          >
            <div className="container">
              <h2>Modern Websites &amp; Software</h2>
              <p>
                {`I'm a Staff Software Engineer at `}
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
                  <strike>Alley</strike>,
                </a>{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://joinlede.com"
                >
                  <strike>Lede,</strike>
                </a>{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.beginlearning.com/"
                >
                  <strike>BEGiN</strike>
                </a>{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://henryscheinone.com"
                >
                  Henry Schein One.
                </a>
                {' '}
              </p>
              <p>
                {`I am a front-end focused, full-stack capable engineer with a strong product sense. I have a great depth of experince building complex, accessible, and performant web applications.`}
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
            </div>
          </div>
          <Social />
          <ContactForm />
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}
