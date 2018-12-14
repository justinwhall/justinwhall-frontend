import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Logo from '../images/mtns.svg'

const Navbar = () => (
  <header id="masthead" className="site-header">
    <div className="container">
      <div className="head-bar">
        <div className="header-mt">
          <Logo />
        </div>
        <div className="site-branding">
          <div className="name-wrap">
            <a href="/">
              <span className="site-title name">Justin W. Hall</span>
              {' '}
              <span className="divider">/</span>
              {' '}
              <span className="site-title title">Web Developer</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Navbar
