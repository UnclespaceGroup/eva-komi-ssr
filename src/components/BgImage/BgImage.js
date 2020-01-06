import React from 'react'
import css from './BgImage.module.scss'

const BgImage = ({ url, children }) => (
  <div className={css.img} style={{ backgroundImage: `url(${url})` }} >
    {children}
  </div>
)
export default BgImage
