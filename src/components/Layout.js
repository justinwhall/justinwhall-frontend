import React from 'react';
import Helmet from 'react-helmet';

import Navbar from './Navbar';
import PageHeader from './PageHeader';
import '../sass/milligram.sass';

const TemplateWrapper = ({ children, title, breadCrumbs }) => (
  <div>
    {console.log(breadCrumbs)}
    <Helmet title="Home | Gatsby + WordPress" />
    <Navbar />
    <PageHeader title={title} breadCrumbs={breadCrumbs} />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
