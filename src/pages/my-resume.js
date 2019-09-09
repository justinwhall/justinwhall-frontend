import React from 'react'
import Layout from '../components/Layout'

const breadCrumbs = [
  {
    text: 'Work',
    link: false,
  },
]

const jobs = [
  {
    workplace: 'Twilio SendGrid',
    title: 'Senior Full Stack Engineer',
    location: 'Denver, CO',
    time: 'February 2019 - Present',
    desc: 'Acquired by Twilio. Job responsibilities remain largely the same.',
    link: 'https://twilio.com',
  },
  {
    workplace: 'SendGrid',
    title: 'Senior Web Developer',
    location: 'Denver, CO',
    time: 'July 2017 - February 2019',
    desc:
      "As the Senior Web Developer at SendGrid, I am responsible for technical decision making and development of SendGrid's public facing web presence. Assets include SendGrid.com, SendGrid.com/docs, an internal employee intranet and external LMS. I work with a variety of teams including DX (technical writers & developer evangelists), Pricing, UIUX, Marketing, Product and Engineering. Additionally, I’ve worked with the design systems team, contribute to our styleguide and React based UI component library. Both assets are shared across all SendGrid development teams.",
    link: 'https://sendgrid.com',
  },
  {
    workplace: 'Prime Practice / Great Dental Websites',
    title: 'Senior Front End-Engineer',
    location: 'Distributed & Denver, CO',
    time: 'November 2012 - June 2017',
    desc:
      'GDW is a hybrid SaSS/marketing company. Their software is a multi-tenant application built for healthcare providers to administer their web presence and automate marketing services. I was the senior and lead front-end developer on a small engineering team. I worked on both the public and private side of the App but my main responsibility was the development of the front-end editing experience.',
    link: 'https://greatdentalwebsites.com',
  },
  {
    workplace: 'Windsor Digital LLC',
    location: 'Denver, CO',
    title: 'Owner, Operator & Janitor',
    time: 'March 2008 - Present',
    desc:
      'My personal freelance LLC. At times, it was my primary source of income. Clients include direct-to-customer and agency contract work. Projects vary, but involve everything from hosting migrations, application development, bug fixes and support.',
    link: 'https://justinwhall.com',
  },
  {
    workplace: 'Howell Ltd',
    location: 'Portland, ME',
    title: 'Production Designer',
    time: 'June 2003 - March 2008',
    desc:
      'Now defunct, Howell Ltd provided a number of marketing services. I was on the production team. As a junior employee, my responsibilities ranged from preparing and editing images within the Adobe Creative Suite for print and web, basic HTML and even more basic ActionScript.',
    link: null,
  },
  {
    workplace: 'State Fish Pier',
    location: 'Gloucester, MA',
    title: 'Chief Fish Chucker',
    time: 'June 2001 - June 2003',
    desc:
      'Woke up absurdly early. Weighed fish. Cut fish. Unloaded fish. Loaded fish. Threw fish. Smelt like fish.',
    link: null,
  },
]

function printResume() {
  const content = document.getElementById('resume')
  const print = document.getElementById('ifmcontentstoprint').contentWindow
  print.document.open()
  print.document.write(content.innerHTML)
  print.document.close()
  print.focus()
  print.print()
}

const Resume = () => (
  <Layout title="Resume" breadCrumbs={breadCrumbs}>
    <div className="container page-resume">
      <button
        className="print-me no-print"
        style={{ marginTop: '10px' }}
        type="button"
        onClick={() => printResume()}
      >
        Print Me
      </button>
    </div>
    <div id="resume" className="container page-resume">
      <div className="personal-meta">
        <div className="name">Justin W. Hall</div>
        <div className="address">637, Somerset Dr, Golden, CO</div>
        <div className="contact">
          720.360.7878 • justinwhall@me.com
          {' • '}
          <a href="https://justinwhall.com">https://justinwhall.com</a>
          {' • '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/justinwhall"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="education">
        <h2>Education</h2>
        <div>
          University of New Hampshire | BS in Mathematics &amp; BA in
          Communications
        </div>
      </div>
      <h2>Experience</h2>
      {jobs.map(job => (
        <div className="job row" key={job.workplace}>
          <div className="column">
            <h3>
              <a href={job.link}>{job.workplace}</a>
            </h3>
            <span className="location">{job.location}</span>
            <p className="lead">{job.title}</p>
            <div className="time">
              <em>{job.time}</em>
            </div>
            <p>{job.desc}</p>
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              {job.linkText}
            </a>
          </div>
        </div>
      ))}
    </div>
    <div className="container">
      <button
        className="print-me"
        style={{ marginTop: '10px' }}
        type="button"
        onClick={() => printResume()}
      >
        Print Me
      </button>
    </div>
    <iframe
      id="ifmcontentstoprint"
      style={{ height: '0px', width: '0px', position: 'absolute' }}
    />
  </Layout>
)

export default Resume
