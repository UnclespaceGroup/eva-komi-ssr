import React from 'react'
import Margin from 'components/Margin/Margin'
import useHome from 'containers/ContainerHome/useHome'
import BlockAdvantagesDesktop from 'components/BlockAdvantages/desktop/BlockAdvantagesDesktop'
import BlockAchievementsDesktop from 'components/BlockAchievements/desktop/BlockAchievementsDesktop'
import BlockInternationalShippingDesktop
  from 'components/BlockInternatioalShipping/desktop/BlockInternationalShippingDesktop'
import BlockPriceDesktop from 'components/BlockPrice/desktop/BlockPriceDesktop'
import BlockCardsDesktop from 'components/BlockCards/desktop/BlockCardsDesktop'
import BlockOrderDesktop from 'components/BlockOrder/desktop/BlockOrederDesktop'
import BannerMainDesktop from 'components/BannerMain/desktop/BannerMainDesktop'

const ContainerHomeDesktop = () => {
  const { advantagesList, achievementsList, cardsList, bottom } = useHome()
  return (
    <>
      <BannerMainDesktop />
      <div id={'it'} />
      <Margin value={0} />
      <BlockAdvantagesDesktop list={advantagesList} />
      <Margin value={0} />
      <BlockCardsDesktop list={cardsList} />
      <Margin value={200} />
      <BlockAchievementsDesktop list={achievementsList} />
      <Margin value={100} />
      <BlockInternationalShippingDesktop />
      <Margin value={100} />
      <BlockPriceDesktop />
      <Margin value={100} />
      <BlockOrderDesktop />
      <Margin value={100} />
      {bottom}
      <Margin value={100} />
    </>
  )
}
export default ContainerHomeDesktop
