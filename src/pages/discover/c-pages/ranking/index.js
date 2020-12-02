import React,{useEffect,memo} from 'react'

import {useDispatch} from 'react-redux'

import {RankingWrapper,RankingLeft,RankingRight} from './style'

import MYTopRanking from './c-cpns/top-ranking'
import MYRankingList from './c-cpns/ranking-list'
import MYRankingHeader from './c-cpns/ranking-header'


export default memo(function MYRanking(){
  return (
    <RankingWrapper>
      <RankingLeft>
        <MYTopRanking/>
      </RankingLeft>
      <RankingRight>
        <MYRankingHeader/>
        <MYRankingList/>
      </RankingRight>
    </RankingWrapper>
  )
})
