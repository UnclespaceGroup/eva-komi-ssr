import React from 'react'
import css from 'pages/PageHome/mobile/pageHomeMobile.module.scss'
// import ButtonPhoneDesktop from 'components/ButtonPhone/desktop/ButtonPhoneDesktop'
import ContainerHomeMobile from 'containers/ContainerHome/mobile/ContainerHomeMobile'

const PageHomeMobile = () => (
  <div className={css.container}>
    {/* <ButtonPhoneDesktop /> */}
    <ContainerHomeMobile />
  </div>
)

export default React.memo(PageHomeMobile)
