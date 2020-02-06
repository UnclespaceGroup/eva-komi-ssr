import React from 'react'
import css from 'components/BlockInternatioalShipping/desktop/BlockInternationalShippingDesktop.module.scss'
import Layout from 'components/Layout/Layout'
import logoRussia from 'static/russia-federal.svg'

const BlockInternationalShippingDesktop = () => {
  return (
    <Layout className={css.container}>
      <div className={css.img} style={{ backgroundImage: `url(${logoRussia})` }} />
      <div className={css.block}>
        <div className={css.title}>Перевозки за городом и по России</div>
        <div className={css.text}>
          <p>Междугородние перевозки, по России и республике Коми, а также в страны СНГ</p>
        </div>
      </div>
    </Layout>
  )
}
export default BlockInternationalShippingDesktop
