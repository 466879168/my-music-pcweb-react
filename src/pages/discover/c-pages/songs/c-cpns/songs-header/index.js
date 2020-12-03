import React, { memo,useState } from 'react'
import {useSelector,shallowEqual} from 'react-redux'


import {HeaderWrapper,HeaderLeft,HeaderRight} from './style'

export default memo(function MYSongsHeader() {
  const [showCategory,setShowCategory] =useState(false)

  const currentCategory = useSelector(state => ({
    currentCategory:state.getIn(["songs", "currentCategory"])
  }).shallowEqual)

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span className="title">
          {currentCategory}
        </span>
        <button className="select" onClick={e=>setCurrentCategory(!showCategory)}>
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
      </HeaderLeft>
      <HeaderRight>

      </HeaderRight>
    </HeaderWrapper>
  )
})
