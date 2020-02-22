import React from 'react'
import css from './ButtonPhoneDesktop.module.scss'
import { MdPhone } from 'react-icons/md'
import { MAIN_PHONE_NUMBER } from 'constants/contacts'

const ButtonPhoneDesktop = () => {
  return (
    <div className={css.buttonPhoneDesktop}>
      <a href={`tel:${MAIN_PHONE_NUMBER}`} >
        <MdPhone />
      </a>
    </div>
  )
}
export default ButtonPhoneDesktop
