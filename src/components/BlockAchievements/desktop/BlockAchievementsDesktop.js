import React from 'react'
import _ from 'lodash'
import css from './BlockAchievementsDesktop.module.scss'
import Layout from 'components/Layout/Layout'
import backImg from 'static/doroga_razmetka_most_123398_1920x1080.jpg'
import BgImage from 'components/BgImage/BgImage'

const BlockAchievementsDesktop = ({ list }) => {
  return (
    <BgImage url={backImg} className={css.back}>
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
    </BgImage>
  )
}
export default BlockAchievementsDesktop
