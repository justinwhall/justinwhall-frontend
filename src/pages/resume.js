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
    workplace: 'Lede',
    title: 'Senior Software Developer',
    location: 'Remote',
    time: 'May 2021 - Current',
    desc: 'Lede, a subsidiary of Alley, is a content subscription platform for small and medium publishers. My focus is on the front end and node applications that power various growth and subscription features.',
    link: 'https://joinlede.com',
  },
  {
    workplace: 'Alley',
    title: 'Senior Software Developer',
    location: 'Remote',
    time: 'March 2020 - May 2021',
    desc: 'At Alley, I was on the data team where we supported the engineering efforts of large scale publishers like the Brookings Institute and work on data visualization applications for organizations like Kaiser Family Foundation and the National Science Foundation.',
    link: 'https://alley.co',
  },
  {
    workplace: 'Twilio SendGrid',
    title: 'Senior Full Stack Engineer',
    location: 'Remote & Denver, CO',
    time: 'February 2019 - January 2020',
    desc: 'Acquired by Twilio. Job responsibilities remain largely the same.',
    link: 'https://twilio.com',
  },
  {
    workplace: 'SendGrid',
    title: 'Senior Developer',
    location: 'Denver, CO',
    time: 'July 2017 - February 2019',
    desc:
      'At SendGrid my focus is around company growth initiatives. Specifically, our pricing application, A/B testing, analytics, event tracking and signup.',
    link: 'https://sendgrid.com',
  },
  {
    workplace: 'Prime Practice / Great Dental Websites',
    title: 'Senior Front End Engineer',
    location: 'Remote & Denver, CO',
    time: 'November 2012 - June 2017',
    desc:
      'GDW is a hybrid SaSS/marketing company. Their software is a multi-tenant, single instance application built for healthcare providers to administer their web presence and automate marketing services. I was the senior and lead front-end developer on a small engineering team. I worked on both the public and private side of the App but my main responsibility was the development of the front-end editing experience.',
    link: 'https://greatdentalwebsites.com',
  },
  {
    workplace: 'Windsor Digital LLC',
    location: 'Denver, CO',
    title: 'Owner, Operator & Janitor',
    time: 'March 2008 - Present',
    desc:
      'My personal freelance software LLC. At times, it was my primary source of income.',
    link: 'https://justinwhall.com',
  },
  {
    workplace: 'Howell Ltd',
    location: 'Portland, ME',
    title: 'Production Designer',
    time: 'June 2004 - March 2008',
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
            https://github.com/justinwhall
          </a>
        </div>
      </div>
      <div className="education">
        <h2>Education</h2>
        <div>
          Colby Sawyer College | BA Communications &amp; Graphic Design
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
