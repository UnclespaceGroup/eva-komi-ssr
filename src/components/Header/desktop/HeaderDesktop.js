import React from 'react'
import css from './HeaderDesktop.module.scss'
import logo from 'static/eva-komi-logo.svg'
import { MAIN_PHONE } from 'constants/contacts'

const HeaderDesktop = () => {
  return (
    <div className={css.wrapper}>
      <div>
        <div className={css.phone}>{MAIN_PHONE}</div>
        <div className={css.phoneText}>круглосуточно, без выходных</div>
      </div>
      <div>
        <div className={css.img} style={{ backgroundImage: `url(${logo})` }} />
      </div>
    </div>
  )
}
export default HeaderDesktop
