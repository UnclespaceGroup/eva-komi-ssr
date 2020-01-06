import React from 'react'
import Margin from 'components/Margin/Margin'
import useHome from 'containers/ContainerHome/useHome'
import BlockAdvantagesDesktop from 'components/BlockAdvantages/desktop/BlockAdvantagesDesktop'
import BlockAchievementsDesktop from 'components/BlockAchievements/desktop/BlockAchievementsDesktop'
import BlockInternationalShippingDesktop
  from 'components/BlockInternatioalShipping/desktop/BlockInternationalShippingDesktop'
import BlockPriceDesktop from 'components/BlockPrice/desktop/BlockPriceDesktop'
import BlockCardsDesktop from 'components/BlockCards/desktop/BlockCardsDesktop'
import BlockOrderDesktop from 'components/BlockOrder/BlockOrederDesktop'

const ContainerHomeDesktop = () => {
  const { advantagesList, achievementsList, cardsList } = useHome()
  return (
    <>
      <Margin value={100} />
      <BlockAdvantagesDesktop list={advantagesList} />
      <Margin value={100} />
      <BlockCardsDesktop list={cardsList} />
      <Margin value={100} />
      <BlockAchievementsDesktop list={achievementsList} />
      <Margin value={100} />
      <BlockInternationalShippingDesktop />
      <Margin value={100} />
      <BlockPriceDesktop />
      <Margin value={100} />
      <BlockOrderDesktop />
      <Margin value={100} />
    </>
  )
}
export default ContainerHomeDesktop
