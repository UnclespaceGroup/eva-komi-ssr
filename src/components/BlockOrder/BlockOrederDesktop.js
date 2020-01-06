import React from 'react'
import css from './desktop/BlockOrderDesktop.module.scss'
import Layout from 'components/Layout/Layout'
import BgImage from 'components/BgImage/BgImage'
import imgOrder from 'static/imgOrder.jpg'
import { MAIN_PHONE, MAIN_PHONE_NUMBER } from 'constants/contacts'

const BlockOrderDesktop = () => {
  return (
    <Layout className={css.wrapper}>
      <BgImage url={imgOrder}>
        <div className={css.container}>
          <div className={css.title}>Для заказа просто позвоните</div>
          <div className={css.phone}>{MAIN_PHONE}</div>
          <a className={css.button} href={`tel:${MAIN_PHONE_NUMBER}`}>Позвонить</a>
          <div className={css.text}>Машина приедет в течении 20 минут</div>
        </div>
      </BgImage>
    </Layout>
  )
}
export default BlockOrderDesktop
