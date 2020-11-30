import React, { memo ,useEffect,useRef} from 'react'
import { useSelector,useDispatch,shallowEqual } from "react-redux";

import {
  getAlbums
} from '../../store/actionCreators'
import {Carousel} from 'antd'

import MYThemeHeaderRCM from '@/components/theme-header-rcm';
import MYAlbumCover from "@/components/album-cover";
import {
  AlbumWrapper
} from "./style";

export default memo(function index() {
  const state = useSelector(state => ({
    newAlbum:state.getIn(["recommend", "newAlbum"])
  }),shallowEqual)
  const dispatch = useDispatch()
  const carouselRef = useRef()
  useEffect(()=>{
    dispatch(getAlbums())
  },[dispatch])

  return (
    <AlbumWrapper>
      <MYThemeHeaderRCM TITLE="新碟上架" moreLink="/discover/album" />
    </AlbumWrapper>
  )
})
