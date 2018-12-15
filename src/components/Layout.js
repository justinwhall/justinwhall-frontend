import React from 'react';
import Helmet from 'react-helmet';

import Navbar from './Navbar';
import PageHeader from './PageHeader';
import Footer from './Footer';
import '../sass/milligram.sass';

const TemplateWrapper = ({ children, title, breadCrumbs, date }) => (
  <div>
    <Helmet title="Home | Gatsby + WordPress" />
    <Navbar />
    <PageHeader title={title} breadCrumbs={breadCrumbs} date={date} />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
