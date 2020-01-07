import React from 'react'
import _ from 'lodash'
import css from './BlockCardsMobile.module.scss'
import LayoutMobile from 'components/Layout/LayoutMobile'

const BlockCardsMobile = ({ list }) => {
  return (
    _.map(list, (item, key) => (
      <LayoutMobile className={css.container} key={key}>
        <div className={css.img} style={{ backgroundImage: `url(${item.img})` }} />
        <div className={css.block}>
          <div className={css.title}>{item.title}</div>
          <hr className={css.separator} />
          <div className={css.text}>{item.text}</div>
        </div>
      </LayoutMobile>
    )
    )
  )
}
export default BlockCardsMobile
