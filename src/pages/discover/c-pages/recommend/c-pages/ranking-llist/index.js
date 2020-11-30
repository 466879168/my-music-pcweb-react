import React,{useEffect,memo} from 'react'

import {useDispatch,useSelector,shallowEqual} from 'react-redux'

import {getTopData} from '../../store/actionCreators'

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import {
  RankingWrapper
} from "./style";

export default memo(function MYRankingList(){
  const dispatch=useDispatch()
  const state=useSelector(state=>({
    topUpList: state.getIn(["recommend", "topUpList"]),
    topNewList: state.getIn(["recommend", "topNewList"]),
    topOriginList: state.getIn(["recommend", "topOriginList"])
  }),shallowEqual)

  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单" moreLink="/discover/ranking"/>
    </RankingWrapper>
  )
})