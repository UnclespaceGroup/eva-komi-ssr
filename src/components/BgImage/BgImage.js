import React from 'react'
import cn from 'classnames'
import css from './BgImage.module.scss'

const BgImage = ({ url, children, className }) => (
  <div className={cn(css.img, className)} style={{ backgroundImage: `url(${url})` }} >
    {children}
  </div>
)
export default BgImage
