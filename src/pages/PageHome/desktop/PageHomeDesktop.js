import React from 'react'
import css from './pageHomeDesktop.module.scss'
import ButtonPhoneDesktop from 'components/ButtonPhone/desktop/ButtonPhoneDesktop'
import ContainerHomeDesktop from 'containers/ContainerHome/desktop/ContainerHomeDesktop'

const PageHomeDesktop = () => (
  <div className={css.container}>
    <ButtonPhoneDesktop />
    <ContainerHomeDesktop />
  </div>
)

export default React.memo(PageHomeDesktop)
