import React from 'react'
import { Link } from 'gatsby'
// import { GitHubIcon } from '../social-share/github-icon'
import { Bio } from '../bio'

import { rhythm } from '../../utils/typography'

import './index.scss'

export const Top = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath

  return (
    <div className="top">
      {!isRoot ? (
        <Link to={`/`} className="link">
          {title}
        </Link>
      ) : (
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <h1 className="home-header">
            <Link to={`/`} className="home-link">
              {title}
            </Link>
          </h1>
          <Bio />
        </div>
      )}
      {/* <GitHubIcon /> */}
    </div>
  )
}
