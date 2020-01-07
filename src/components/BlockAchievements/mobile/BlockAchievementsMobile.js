import React from 'react'
import _ from 'lodash'
import css from 'components/BlockAchievements/mobile/BlockAchievementsMobile.module.scss'
import backImg from 'static/doroga_razmetka_most_123398_1920x1080.jpg'
import LayoutMobile from 'components/Layout/LayoutMobile'

const BlockAchievementsMobile = ({ list }) => {
  return (
    <div style={{ backgroundImage: `url(${backImg})` }} className={css.back}>
      <div className={css.container}>
        <LayoutMobile className={css.row} >
          {
            _.map(list, (item, key) => (
              <div key={key} className={css.item}>
                <div className={css.value}>{item.value}</div>
                <div className={css.title}>{item.title}</div>
              </div>
            ))
          }
        </LayoutMobile>
      </div>
    </div>
  )
}
export default BlockAchievementsMobile
