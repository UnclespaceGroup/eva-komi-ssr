import React from 'react'
import Margin from 'components/Margin/Margin'
import useHome from 'containers/ContainerHome/useHome'
import BannerMainMobile from 'components/BannerMain/mobile/BannerMainMobile'
import BlockAdvantagesMobile from 'components/BlockAdvantages/mobile/BlockAdvantagesMobile'
import BlockCardsMobile from 'components/BlockCards/mobile/BlockCardsMobile'
import BlockAchievementsMobile from 'components/BlockAchievements/mobile/BlockAchievementsMobile'
import BlockInternationalShippingMobile
  from 'components/BlockInternatioalShipping/mobile/BlockInternationalShippingMobile'
import BlockPriceMobile from 'components/BlockPrice/mobile/BlockPriceMobile'
import BlockOrderMobile from 'components/BlockOrder/mobile/BlockOrderMobile'

const ContainerHomeMobile = () => {
  const { advantagesList, achievementsList, cardsList } = useHome()
  return (
    <>
      <BannerMainMobile />
      <div id={'it'} />
      {/* <Margin value={0} /> */}
      <BlockAdvantagesMobile list={advantagesList} />
      {/* <Margin value={0} /> */}
      <BlockCardsMobile list={cardsList} />
      <Margin value={50} />
      <BlockAchievementsMobile list={achievementsList} />
      <Margin value={100} />
      <BlockInternationalShippingMobile />
      <Margin value={100} />
      <BlockPriceMobile />
       <Margin value={100} />
       <BlockOrderMobile />
       <Margin value={100} />
    </>
  )
}
export default ContainerHomeMobile
