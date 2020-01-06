import React from 'react'
import _ from 'lodash'
import css from 'components/BlockCards/desktop/BlockCardsDesktop.module.scss'
import Layout from 'components/Layout/Layout'

const BlockCardsDesktop = ({ list }) => {
  return (
    _.map(list, (item, key) => (
      <Layout className={css.container} key={key}>
        <div className={css.block}>
          <div className={css.title}>{item.title}</div>
          <hr className={css.separator} />
          <div className={css.text}>{item.text}</div>
        </div>
        <div className={css.img} style={{ backgroundImage: `url(${item.img})` }} />
      </Layout>
    )
    )
  )
}
export default BlockCardsDesktop
