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
      <MYThemeHeaderRCM title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <div className="arrow arrow-left sprite_02" onClick={e=>carouselRef.current.prev()}></div>
        <div className="album">
        <Carousel ref={carouselRef} dots={false}>
          {
            [0,1].map((item,index) => {
              return (
                <div className="page" key={item}>
                  {
                    state.newAlbum.slice(item*5,(item+1)*5).map(item=>{
                      return (
                        <MYAlbumCover key={item.id} info={item}/>
                      )
                    }
                  }
                </div>
              )
            })
          }
        </Carousel>
        </div>
        <div className="arrow arrow-right sprite_02" onClick={e=>carouselRef.current.next()}></div>
      </div>
    </AlbumWrapper>
  )
})
