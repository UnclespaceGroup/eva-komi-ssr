import React from 'react'
import css from './FooterDesktop.module.scss'
import logo from 'static/eva-komi-logo-white.svg'
import Layout from 'components/Layout/Layout'
import { MAIN_PHONE, SECOND_PHONE } from 'constants/contacts'
import Margin from 'components/Margin/Margin'
import { MdPhone, MdPlace } from 'react-icons/md'

const FooterDesktop = () => {
  return (
    <>
    <div className={css.container}>
      <Layout>
        <div className={css.img} style={{ backgroundImage: `url(${logo})` }} />
        <div className={css.contacts}>
          <div className={css.phone}>
            <div><MdPhone /> {MAIN_PHONE}</div>
            <Margin value={24} />
            <div><MdPhone /> {SECOND_PHONE}</div>
          </div>
          <div className={css.address} >
            <MdPlace /> г. Сыктывкар, Республика Коми
          </div>
        </div>
      </Layout>
    </div>
      <div className={css.unclespace}>
        <Layout>Разработано <a target={'_blank'} href={'https://vk.com/unclespace'}>Unclespace group</a></Layout>
      </div>
      </>
  )
}
export default FooterDesktop
