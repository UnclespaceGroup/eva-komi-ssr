import React, { useState, useEffect } from 'react'
import css from './HeaderMobile.module.scss'
import logo from 'static/eva-komi-logo-mobile.svg'
import { MAIN_PHONE } from 'constants/contacts'
import cn from 'classnames'

const HeaderMobile = () => {
  const [ blackHeader, setBlackHeader ] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    const OFFSET = 100
    if (!window) return
    if (window.pageYOffset > OFFSET) {
      // Сделать черным
      setBlackHeader(true)
    } else if (window.pageYOffset < OFFSET) {
      // сделать белым
      setBlackHeader(false)
    }
  }

  return (
    <div className={cn(css.wrapper, { [ css.black ]: blackHeader })}>
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
export default HeaderMobile
