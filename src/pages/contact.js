import React from 'react';
import Layout from '../components/Layout';

const breadCrumbs = [
  {
  text: 'Contact',
  link: false,
  }
]

const Contact = () => (
  <Layout title="Contact" breadCrumbs={breadCrumbs}>
    <div>
      <h1>contact</h1>
    </div>
  </Layout>
)

export default Contact
