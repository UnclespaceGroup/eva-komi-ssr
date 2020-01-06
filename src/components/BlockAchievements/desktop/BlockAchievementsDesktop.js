import React from 'react'
import _ from 'lodash'
import css from './BlockAchievementsDesktop.module.scss'
import Layout from 'components/Layout/Layout'
import backImg from 'static/doroga_razmetka_most_123398_1920x1080.jpg'

const BlockAchievementsDesktop = ({ list }) => {
  return (
    <div style={{ backgroundImage: `url(${backImg})` }} className={css.back}>
      <div className={css.container}>
        <Layout className={css.row} >
          {
            _.map(list, (item, key) => (
              <div key={key} className={css.item}>
                <div className={css.value}>{item.value}</div>
                <div className={css.title}>{item.title}</div>
              </div>
            ))
          }
        </Layout>
      </div>
    </div>
  )
}
export default BlockAchievementsDesktop
