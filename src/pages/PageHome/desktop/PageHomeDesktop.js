// packages
import React from 'react'
// components
import s from './pageHomeDesktop.module.scss'
import Layout from 'components/Layout/Layout'
import HeaderDesktop from 'components/Header/desktop/HeaderDesktop'

const PageHomeDesktop = () => (
  <div className={s.container}>
    <HeaderDesktop />
    <Layout >
      dsmlmlkdc
    </Layout>
  </div>
)

export default React.memo(PageHomeDesktop)
