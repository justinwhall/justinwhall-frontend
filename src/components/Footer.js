import React from 'react';

const Footer = () => (
  <footer id="colophon" className="site-footer">
    <div className="container">
      <div className="row">
        <div className="footer-menu column">
          <div className="menu-main-nav-menu-container">
            <ul id="primary-menu" className="menu">
              <li className="menu-item"><a href="http://justinwhall.com/">HOME</a></li>
              <li className="menu-item"><a href="https://justinwhall.com/work/">WORK</a></li>
              <li className="menu-item"><a href="https://justinwhall.com/web-development-blog/">BLOG</a></li>
              <li className="menu-item"><a target="_blank" rel="noopener noreferrer" href="http://windsorup.com/">MAINTENANCE</a></li>
              <li className="menu-item"><a target="_blank" rel="noopener noreferrer" href="https://www.littlebot.io">PLUGINS</a></li>
              <li className="menu-item"><a href="https://justinwhall.com/contact/">CONTACT</a></li>
            </ul>
          </div>
          {' '}
        </div>
        <div className="column copy">
          © 2018 Justin W Hall
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;