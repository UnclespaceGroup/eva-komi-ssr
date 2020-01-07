import React from 'react'
import css from 'pages/PageHome/mobile/pageHomeMobile.module.scss'
import ContainerHomeMobile from 'containers/ContainerHome/mobile/ContainerHomeMobile'
import ButtonPhoneMobile from 'components/ButtonPhone/mobile/ButtonPhoneMobile'

const PageHomeMobile = () => (
  <div className={css.container}>
    <ButtonPhoneMobile />
    <ContainerHomeMobile />
  </div>
)

export default React.memo(PageHomeMobile)
