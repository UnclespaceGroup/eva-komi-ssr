import React from 'react'
import css from 'components/BannerMain/mobile/BannerMainMobile.module.scss'
import photoTriangle from 'static/orange-triangle.svg'
import gazel from 'static/gazel.png'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import LayoutMobile from 'components/Layout/LayoutMobile'

const BannerMainMobile = () => {
  return (
    <div className={css.container} >
      <div className={css.triangle} style={{ backgroundImage: `url(${photoTriangle})` }} />
      <div className={css.gazel} style={{ backgroundImage: `url(${gazel})` }} />
      <LayoutMobile className={css.wrapper}>
        <h1>Эвакуатор</h1>
        <div className={css.text}>
          Закажите быстрый и дешёвый эвакуатор в Сыктывкаре и республике Коми
        </div>
      </LayoutMobile>
      <div onClick={() => scrollWindowTo('it')} className={css.arrow}>
        <MdKeyboardArrowDown />
      </div>
    </div>
  )
}
export default BannerMainMobile
