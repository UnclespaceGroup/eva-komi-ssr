import React from 'react'
import css from './FooterDesktop.module.scss'
import logo from 'static/eva-komi-logo-white.svg'
import Layout from 'components/Layout/Layout'
import { MAIN_PHONE } from 'constants/contacts'

const FooterDesktop = () => {
  return (
    <>
    <div className={css.container}>
      <Layout>
        <div className={css.img} style={{ backgroundImage: `url(${logo})` }} />
        <div className={css.contacts}>
          <div className={css.phone}>
            {MAIN_PHONE}
          </div>
          <div className={css.address} >
          г. Сыктывкар, Республика Коми
          </div>
        </div>
      </Layout>
    </div>
      <div className={css.unclespace}>
        <Layout>Разработано Unclespace group</Layout>
      </div>
      </>
  )
}
export default FooterDesktop
