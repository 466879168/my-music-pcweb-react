import React, {useEffect, memo } from 'react'
import {useDispatch} from 'react-redux'
import {useLocation} from 'react-router-dom'


import { 
  getCategory,
  getSongList,
  changeCurrentCategoryAction
} from "./store/actionCreators";



import {SongsWrapper} from './style'



export default memo(function MYSongs() {

  const dispatch = useDispatch()
  const cat=useLocation().cat
  return (
    <SongsWrapper className="wrap-v2">
      
    </SongsWrapper>
  )
})
