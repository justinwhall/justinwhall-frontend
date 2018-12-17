import React from 'react';
import Layout from '../components/Layout';


const breadCrumbs = [
  {
  text: 'Work',
  link: false,
  }
]

const jobs = [
  {
    workplace: "SendGrid",
    title: "Senior Web Developer",
    time: "July 2017 - Present",
    desc: "As the Senior Web Developer at SendGrid I am responsible for technical decision making and developermnet of SendGrid's public facing web presense which include SendGrid.com and the documentation site located at SendGrid.com/docs. I work with a variety of teams including DX (technical writers), pricing, UIUX researchers, marketing, Product and Engineering. I colloborate with marketing to A/B test, pass various analytics to Google Analytics datalayer, Segments.io and optimizely. I also work closely with the Customer Growth Engineering team to colaborate on the hand off from pricing to signup.",
    link: "https://sendgrid.com",
  },
  {
    workplace: "Prime Practice / Great Dental Websites",
    title: "Senior Web Developer",
    time: "November 2012 - June 2017",
    desc: "GDW is a hybrid SaSS / marketing company. Their software is a multitenant application built for healthcare providers to adminster their web presense and automate marketing services. I was the senior and lead front end developer on a small Engineering org. My main responsabilty was the development of both the public and authenticated front end.",
    link: "https://greatdentalwebsites.com",
  },
  {
    workplace: "Windsor Digital LLC",
    title: "Owner, Operator & Janitor",
    time: "March 2008 - Present",
    desc: "My personal freelance LLC. At times, it was my main source of income. Projects range from direct to customer to contract work agencies.",
    link: "https://justinwhall.com",
  },
  {
    workplace: "Windsor Digital LLC",
    title: "Owner, Operator & Janitor",
    time: "March 2008 - Present",
    desc: "My personal freelance LLC. At times, it was my main source of income. Projects range from direct to customer to contract work agencies.",
    link: "https://justinwhall.com",
  },
  {
    workplace: "Howell Ltd",
    title: "Production Designer",
    time: "June 2003 - March 2008",
    desc: "Now defunct, Howell Ltd provided a number of marketing services. I was on the prodcution team. As a junior employee my responsabilites ranged from preparing and editing images within the Adobe Creative suite for print and web, basic html and even more basic actionscript.",
    link: null,
  },
]

function printResume() {
  const content = document.getElementById("resume");
  const print = document.getElementById("ifmcontentstoprint").contentWindow;
  print.document.open();
  print.document.write(content.innerHTML);
  print.document.close();
  print.focus();
  print.print();
}

const Resume = () => (
  <Layout title="Resume" breadCrumbs={breadCrumbs}>
    <div id="resume" className="container page-resume">
      <button className="print-me" style={{'marginTop': '10px'}} type="button" onClick={() => printResume()}>Print Me</button>
      <h2>Experince</h2>
      {jobs.map(job => (
        <div className="job row">
          <div className="column">
            <h3><a href={job.link}>{job.workplace}</a></h3>
            <p className="lead">{job.title}</p>
            <div className="time"><em>{job.time}</em></div>
            <p>{job.desc}</p>
            <a href={job.link} target="_blank" rel="noopener noreferrer">{job.linkText}</a>
          </div>
        </div>
      ))}
      <div className="skills">
        <h2>Languages</h2>
        <ul>
          <li>JavaScript</li>
          <li>NodeJS</li>
          <li>PHP</li>
          <li>Java</li>
          <li>ColdFusion</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <h2>Libaries, Frameworks &amp; Tooling</h2>
        <ul>
          <li>jQuery</li>
          <li>React</li>
          <li>Preact</li>
          <li>GatsbyJS</li>
          <li>Jekyll</li>
          <li>WordPress</li>
          <li>Gulp</li>
          <li>SASS/LESS</li>
          <li>Git</li>
        </ul>
        <h2>Services etc</h2>
        <ul>
          <li>
            Amazon Web Services
            <ul>
              <li>S3</li>
              <li>CloudFront</li>
              <li>Lambda</li>
              <li>API Gateway</li>
              <li>Route53</li>
            </ul>
          </li>
          <li>Various CIs</li>
          <li>MySQL</li>
        </ul>
      </div>
    </div>
    <button className="print-me" style={{'marginTop': '10px'}} type="button" onClick={() => printResume()}>Print Me</button>
    <iframe id="ifmcontentstoprint" style={{'height': '0px', 'width': '0px', 'position': 'absolute'}} />
  </Layout>
)

export default Resume
