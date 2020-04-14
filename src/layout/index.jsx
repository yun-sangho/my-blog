import React from 'react'

import { Top } from '../components/top'
import { Footer } from '../components/footer'
import { rhythm } from '../utils/typography'
import { ThemeSwitch } from '../components/theme-switch'
import './index.scss'

export const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <React.Fragment>
      <Top title={title} location={location} rootPath={rootPath} />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          paddingTop: '20px'
        }}
      >
        <ThemeSwitch />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  )
}
