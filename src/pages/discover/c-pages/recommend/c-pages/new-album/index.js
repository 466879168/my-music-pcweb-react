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

export default memo(function MYNewAlbum() {
  const state = useSelector(state => ({
    newAlbum:state.getIn(["recommend", "newAlbum"])
  }),shallowEqual)

  const dispatch = useDispatch()
  const carouselRef = useRef()

  useEffect(()=>{
    dispatch(getAlbums())
  },[dispatch])
  console.log(state.newAlbum)
  return (
    <AlbumWrapper>
      <MYThemeHeaderRCM title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <div className="arrow arrow-left sprite_02" onClick={e => carouselRef.current.prev()}/>
        <div className="album">
        <Carousel ref={carouselRef} dots={false}>
          {
            [0,1].map((item,index) => {
              return (
                <div key={item} className="page">
                  {
                    state.newAlbum&&state.newAlbum.slice(item*5,(item+1)*5).map(iten=>{
                      return (
                        <MYAlbumCover key={iten.id} info={iten} />
                      )
                    })
                  }
                </div>
              )
            })
          }
        </Carousel>
        </div>
        <div className="arrow arrow-right sprite_02" onClick={e=>carouselRef.current.next()} />
      </div>
    </AlbumWrapper>
  )
})
