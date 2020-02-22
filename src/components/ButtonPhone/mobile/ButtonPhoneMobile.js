import React from 'react'
import css from './ButtonPhoneMobile.module.scss'
import { MdPhone } from 'react-icons/md'
import { MAIN_PHONE_NUMBER } from 'constants/contacts'

const ButtonPhoneMobile = () => {
  return (
    <div className={css.buttonPhoneDesktop}>
      <a href={`tel:${MAIN_PHONE_NUMBER}`} >
        <MdPhone />
      </a>
    </div>
  )
}
export default ButtonPhoneMobile
