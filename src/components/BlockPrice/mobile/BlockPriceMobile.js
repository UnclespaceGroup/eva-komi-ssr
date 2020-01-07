import React from 'react'
import css from './BlockPriceMobile.module.scss'
import photoRoad from 'static/doroga_asfalt_dozhd_141217_1920x1080.jpg'

const BlockPriceMobile = () => {
  return (
    <div className={css.img} style={{ backgroundImage: `url(${photoRoad})` }} >
      <div className={css.container}>
        <div className={css.left}>
          <div className={css.leftText}>Цена</div>
        </div>
        <div className={css.right}>
          <div className={css.rightText}>
            от 900 руб.
            <div className={css.oldPrice}>от 1 300 руб.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BlockPriceMobile
