import React, { memo } from 'react'

import classnames from 'classnames'

import {useDispatch,useSelector,shallowEqual} from 'react-redux'

import {getSizeImage} from '@/utils/format-utils'

import {
  changeCurrentIndex,
  getRanking
} from "../../store/actionCreators"


import {TopRankingWrapper} from './style'





export default memo(function MYTopRanking() {

  const state=useSelector(state=>({
    topList:state.getIn(["ranking", "topList"]),
    currentIndex:state.getIn(["ranking", "topList"])
  }),shallowEqual)

  const currentIndex=state.currentIndex
  const dispatch=useDispatch()



  useEffect(() => {
    const id = (state.topList[currentIndex] && state.topList[currentIndex].id);
    if (!id) return;
    dispatch(getRanking(id))
  }, [state, dispatch, currentIndex])


  const hanldeItemClick=(input)=>{
    dispatch(changeCurrentIndex(index));
    const id = state.topList[currentIndex].id;
    dispatch(getRanking(id))
  }



  return (
    <TopRankingWrapper>
      {
        state.topList.map((item,index)=>{
          let header;
          if (index === 0 || index === 4) {
            header=<div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
          }
          return (
            <div key={item.id}>
              {header}
              <div className={classnames("item",{"active":index === currentIndex})} onClick={e=>hanldeItemClick(index)}>
                <img src={getSizeImage(item.coverImage,40)} alt=""/>
                <div className="info">
                  <div className="name">
                    {item.name}
                  </div>
                  <div className="update">
                    {item.updateFrequency}
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </TopRankingWrapper>
  )
})
