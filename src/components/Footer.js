import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer id="colophon" className="site-footer">
    <div className="container">
      <div className="row">
        <div className="footer-menu column">
          <div className="menu-main-nav-menu-container">
            <ul id="primary-menu" className="menu">
              <li className="menu-item">
                <Link to="/">HOME</Link>
              </li>
              <li className="menu-item">
                <Link to="/work/">WORK</Link>
              </li>
              <li className="menu-item">
                <Link to="/web-development-blog/">BLOG</Link>
              </li>
              <li className="menu-item">
                <Link to="/contact/">CONTACT</Link>
              </li>
            </ul>
          </div>
          {' '}
        </div>
        <div className="column copy">© 2020 Justin W Hall</div>
      </div>
    </div>
  </footer>
)

export default Footer
