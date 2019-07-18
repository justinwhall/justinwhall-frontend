import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ pageContext, pathPrefix }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <nav className="pagination" role="navigation">
      <div className="nav-links">
        {previousPagePath && (
          <div className="nav-previous">
            <Link to={previousPagePath} rel="prev">
              Previous
            </Link>
          </div>
        )}
        {nextPagePath && (
          <div className="nav-next">
            <Link to={nextPagePath} rel="next">
              Next
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Pagination
