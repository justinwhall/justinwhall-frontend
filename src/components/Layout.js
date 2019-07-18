import React from 'react';
import Helmet from 'react-helmet';
import MenuOverlay from "./MenuOverlay";
import Navbar from './Navbar';
import PageHeader from './PageHeader';
import Footer from './Footer';
import '../sass/milligram.sass';

const TemplateWrapper = ({ children, title, breadCrumbs, date }) => (
  <div>
    <MenuOverlay />
    <Helmet title={`${title} | Denver & Boulder Colorado WordPress Developer & Designer`} />
    <Navbar />
    <PageHeader title={title} breadCrumbs={breadCrumbs} date={date} />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
