import React from 'react'
import _ from 'lodash'
import css from './BlockAdvantagesDesktop.module.scss'
import Layout from 'components/Layout/Layout'

const BlockAdvantagesDesktop = ({ list }) => {
  return (
    <Layout className={css.container}>
      {
        _.map(list, (item, key) => {
          return (
            <div key={key} className={css.card}>
              <div className={css.icon} style={{ backgroundImage: `url(${item.icon})` }} />
              <div className={css.title}>{item.title}</div>
              <div className={css.text}>{item.text}</div>
            </div>
          )
        })
      }
    </Layout>
  )
}
export default BlockAdvantagesDesktop
