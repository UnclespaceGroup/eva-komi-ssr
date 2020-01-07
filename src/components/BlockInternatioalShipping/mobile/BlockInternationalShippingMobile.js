import React from 'react'
import css from './BlockInternationalShippingMobile.module.scss'
import logoRussia from 'static/russia-federal.svg'
import LayoutMobile from 'components/Layout/LayoutMobile'

const BlockInternationalShippingMobile = () => {
  return (
    <LayoutMobile className={css.container}>
      <div className={css.img} style={{ backgroundImage: `url(${logoRussia})` }} />
      <div className={css.block}>
        <div className={css.title}>Перевозки за городом и по России</div>
        <div className={css.text}>Междугородние перевозки, по России и республике Коми, а также в страны СНГ</div>
      </div>
    </LayoutMobile>
  )
}
export default BlockInternationalShippingMobile
