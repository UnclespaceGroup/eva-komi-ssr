// packages
import React from 'react'
import { compose } from 'redux'
import { hot } from 'react-hot-loader'
import RoutesDesktop from 'pages/RoutesDesktop'
import HeaderDesktop from 'components/Header/desktop/HeaderDesktop'

const AppDesktop = () => (
  <div>
    <HeaderDesktop />
    <RoutesDesktop />
  </div>
)

export default compose(
  hot(module),
  React.memo
)(AppDesktop)
