import React from 'react'
import css from './FooterMobile.module.scss'
import logo from 'static/eva-komi-logo-white-mobilee.svg'
import { MAIN_PHONE } from 'constants/contacts'
import LayoutMobile from 'components/Layout/LayoutMobile'

const FooterMobile = () => {
  return (
    <>
    <div className={css.container}>
      <LayoutMobile>
        <div className={css.img} style={{ backgroundImage: `url(${logo})` }} />
        <div className={css.contacts}>
          <div className={css.phone}>
            {MAIN_PHONE}
          </div>
          <div className={css.address} >
          г. Сыктывкар, Республика Коми
          </div>
        </div>
      </LayoutMobile>
    </div>
      <div className={css.unclespace}>
        <LayoutMobile>Разработано <a target={'_blank'} href={'https://vk.com/unclespace'}>Unclespace group</a></LayoutMobile>
      </div>
      </>
  )
}
export default FooterMobile
