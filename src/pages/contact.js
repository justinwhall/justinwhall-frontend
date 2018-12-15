import React from 'react';
import ContactForm from '../components/ContactForm';
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
      <ContactForm />
    </div>
  </Layout>
)

export default Contact
