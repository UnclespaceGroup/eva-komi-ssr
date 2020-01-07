import React from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import RoutesMobile from 'pages/RoutesMobile'
import HeaderMobile from 'components/Header/mobile/HeaderMobile'

const AppMobile = () => (
  <div>
    <HeaderMobile />
    <RoutesMobile />
  </div>
)

export default compose(
  hot(module),
  React.memo
)(AppMobile)
