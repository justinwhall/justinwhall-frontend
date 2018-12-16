import React from 'react';
import { Link } from 'gatsby';

const PageHeader = ({ title = false, breadCrumbs = false, date = false }) => (
  <React.Fragment>
    <header className="page-head">
      <div className="container">
        {title && <h1 className="page-title">{title}</h1> }
        {date && (
        <div className="entry-meta">
          <span className="posted-on">
            <time className="entry-date published updated">{date}</time>
          </span>
        </div>
        )}
      </div>
    </header>
    {breadCrumbs && (
    <div className="crumbs">
      <div className="container">
        <nav className="breadcrumbs">
          <Link to="/">Home</Link>
          {breadCrumbs.map(item => (
            <React.Fragment>
              <span className="sep">/</span>
              {item.link ? (
                <Link to={item.link}>
                  {item.text}
                </Link>
                ) : <span>{item.text}</span>
              }
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
    )}
  </React.Fragment>
);

export default PageHeader;