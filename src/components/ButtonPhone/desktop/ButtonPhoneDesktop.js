import React from 'react'
import css from './ButtonPhoneDesktop.module.scss'
import { MdPhone } from 'react-icons/md'
import { MAIN_PHONE_NUMBER } from 'constants/contacts'

const ButtonPhoneDesktop = () => {
  return (
    <a href={`tel:${MAIN_PHONE_NUMBER}`} className={css.buttonPhoneDesktop}>
      <MdPhone />
    </a>
  )
}
export default ButtonPhoneDesktop
