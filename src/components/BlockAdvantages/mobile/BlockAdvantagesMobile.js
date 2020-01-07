import React from 'react'
import _ from 'lodash'
import css from 'components/BlockAdvantages/mobile/BlockAdvantagesMobile.module.scss'
import LayoutMobile from 'components/Layout/LayoutMobile'

const BlockAdvantagesMobile = ({ list }) => {
  return (
    <div className={css.back}>
      <LayoutMobile className={css.container}>
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
      </LayoutMobile>
    </div>
  )
}
export default BlockAdvantagesMobile
