import React from 'react'
import Margin from 'components/Margin/Margin'
import useHome from 'containers/ContainerHome/useHome'
import BlockAdvantagesDesktop from 'components/BlockAdvantages/desktop/BlockAdvantagesDesktop'
import BlockAchievementsDesktop from 'components/BlockAchievements/desktop/BlockAchievementsDesktop'
import BlockInternationalShippingDesktop
  from 'components/BlockInternatioalShipping/desktop/BlockInternationalShippingDesktop'

const ContainerHomeDesktop = () => {
  const { advantagesList, achievementsList } = useHome()
  return (
    <>
      <Margin value={100} />
      <BlockAdvantagesDesktop list={advantagesList} />
      <Margin value={100} />
      <BlockAchievementsDesktop list={achievementsList} />
      <Margin value={100} />
      <BlockInternationalShippingDesktop />
    </>
  )
}
export default ContainerHomeDesktop
