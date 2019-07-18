import React from 'react';
import Layout from '../components/Layout';
import sendgrid from '../images/work-sendgrid.png';
import tbwa from '../images/work-tbwa.png';
import rapids from '../images/work-rapids.png';
import rb from '../images/work-rb.png';
import gdw from '../images/work-gdw.png';
import vintageview from '../images/work-vvv.png';

const breadCrumbs = [
  {
  text: 'Work',
  link: false,
  }
]

const clients = [
  {
    name: "SendGrid",
    desc: "SendGrid provides a cloud-based email delivery service that assists businesses with email delivery. The service manages various types of email including shipping notifications, friend requests, sign-up confirmations, and email newsletters. It also handles internet service provider (ISP) monitoring, domain keys, sender policy framework (SPF), and feedback loops.",
    link: "https://sendgrid.com",
    linkText: "SendGrid.com",
    img: sendgrid,
  },
  {
    name: "TBWA",
    desc: "TBWA Worldwide is an international advertising agency whose main headquarters are in Midtown Manhattan, New York City, United States. The agency is a unit of Omnicom Group, the world's largest advertising agency holding company.",
    link: "https://tbwa.com",
    linkText: "twba.com",
    img: tbwa,
  },
  {
    name: "Colorado Rapids Youth Soccer",
    desc: "Colorado Rapids Youth Soccer provides one of the nation’s most comprehensive, in-depth approaches to youth soccer providing opportunities for players three-years-old to professional, from beginner to advanced. In partnership with the professional MLS team CRYSC serves over 4,000 children every season.",
    link: "https://rapidsyouthsoccer.org",
    linkText: "rapidsyouthsoccer.org",
    img: rapids,
  },
  {
    name: "Rowland + Broughton",
    desc: "R+B is a nationally recognized, Colorado-based, award-winning firm specializing in residential and hospitality architecture and interior design.",
    link: "https://www.rowlandbroughton.com",
    linkText: "rowlandbroughton.com",
    img: rb,
  },
  {
    name: "Great Dental Websites",
    desc: "Great Dental Websites is a hybrid SaaS / Marketing company. They offer custom websites by leveraging their propriety software built specifically for dentists.",
    link: "https://greatdentalwebsites.com",
    linkText: "greatdentalwebsites.com",
    img: gdw,
  },
  {
    name: "VintageView",
    desc: "VintageView is a leader in the wine storage design and eCommerce space. Their patented label-forward designs are a chic, contemporary, and modern solution for storing and displaying wine.",
    link: "https://vintageview.com",
    linkText: "vintageview.com",
    img: vintageview,
  },
]

const Work = () => (
  <Layout title="Work" breadCrumbs={breadCrumbs}>
    <div className="container page-work">
      <div className="lead">
        <em>Some</em>
        {` of the great people & organizations I've had the pleasure of working with or for.`}
      </div>
      {clients.map(client => (
        <div className="client row">
          <div className="column">
            <h2>{client.name}</h2>
            <p>{client.desc}</p>
            <a href={client.link} target="_blank" rel="noopener noreferrer">{client.linkText}</a>
          </div>
          <div className="column">
            <img src={client.img} alt={`${client.name} Website`} />
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export default Work
