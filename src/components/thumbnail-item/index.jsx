import React from 'react'
import { Link } from 'gatsby'
import { TARGET_CLASS } from '../../utils/visible'
// import Img from 'gatsby-image'

import './index.scss'

export const ThumbnailItem = ({ node }) => {
  const thumbnail = node.frontmatter.thumbnail

  return (
    <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
      <div className='thumbnail-box' key={node.fields.slug} style={{display: 'flex'}}>
        <div>
          <h3 className='thumbnail-title'>{node.frontmatter.title || node.fields.slug}</h3>
          <p className='thumbnail-description' dangerouslySetInnerHTML={{ __html: node.frontmatter.description || node.excerpt }} />
        </div>
        {/* {thumbnail && <img className='thumbnail-image' src={thumbnail.childImageSharp.fixed.src} />} */}
      </div>
    </Link>
  )
}
