import React from 'react'
import Margin from 'components/Margin/Margin'
import useHome from 'containers/ContainerHome/useHome'
import BlockAdvantagesDesktop from 'components/BlockAdvantages/desktop/BlockAdvantagesDesktop'

const ContainerHomeDesktop = () => {
  const { advantagesList } = useHome()
  return (
    <>
      <Margin value={100} />
      <BlockAdvantagesDesktop list={advantagesList} />
    </>
  )
}
export default ContainerHomeDesktop
