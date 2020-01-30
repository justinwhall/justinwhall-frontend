import React from 'react'
import Layout from '../components/Layout'

const breadCrumbs = [
  {
    text: 'Rates',
    link: false,
  },
]

const rates = [
  {
    hours: 'Less than 10',
    rate: 100,
    note: false,
  },
  {
    hours: '10 ',
    rate: 100,
    note: false,
  },
]
const NotFoundPage = () => (
  <Layout title="Rates" breadCrumbs={breadCrumbs}>
    <div class="container">
      <h1>Rates</h1>
      <p>
        For projects under 10 hours, I charge <strong>100/hour</strong>
      </p>
      <p>
        For projects over 10 hours, I charge <strong>90/hour</strong>
      </p>
      <h3>Fixed estimates</h3>
      <p>
        Yes, In most cases I can provide fixed estimates. Some excpetions are
        PHP/NodeJS server upgrades, projects with no specs or projects that were
        started by another developer and abanonded. These are not hard rules but
        generally lead to difficulty in estimating. In most cases I can still
        provide an estimate however the estimate will be a wider range.
      </p>
      <h3>Payment terms</h3>
      <p>I require 50% deposit and then 50% product delivery.</p>
    </div>
  </Layout>
)

export default NotFoundPage
