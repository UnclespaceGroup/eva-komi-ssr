import React from 'react'
import css from './ButtonPhoneDesktop.module.scss'
import { MdPhone } from 'react-icons/md'

const ButtonPhoneDesktop = () => {
  return (
    <div className={css.buttonPhoneDesktop}>
      <MdPhone />
    </div>
  )
}
export default ButtonPhoneDesktop
