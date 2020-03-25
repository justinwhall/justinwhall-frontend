import React from 'react'
import { Link } from 'gatsby'

class MenuOverlay extends React.Component {
  state = {
    open: false,
  }

  toggleMenu = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    return (
      <React.Fragment>
        <div
          onClick={this.toggleMenu}
          id="nav-icon"
          className={`menu-toggle ${this.state.open ? 'fixed' : null}`}
          aria-controls="primary-menu"
          aria-expanded="false"
        >
          <span />
          <span />
          <span />
          <span />
          <div className="screen-reader-text">Menu</div>
        </div>
        <nav id="nav" className={this.state.open ? 'in' : null}>
          <div className="menu-main-nav-menu-container">
            <ul id="primary-menu" className="menu">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/web-development-blog/">BLOG</Link>
              </li>
              <li>
                <Link to="/about/">ABOUT</Link>
              </li>
              <li>
                <a targset="_blank" href="https://www.littlebot.io">
                  PLUGINS
                </a>
              </li>
              <li>
                <Link to="/contact/">CONTACT</Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default MenuOverlay
