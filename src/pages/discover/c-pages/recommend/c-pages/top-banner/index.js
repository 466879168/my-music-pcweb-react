import React, { memo,useEffect,useCallback,useState,useRef } from 'react'
import {useDispatch,useSelector,shallowEqual} from 'react-redux'

import {Carousel} from 'antd'

import {BannerWrapper,BannerLeft,BannerRight,BannerControl} from './style'

import { getBanner } from '../../store/actionCreators'

export default memo(function MYTopBanner() {
  const [currentIndex,setCurrentIndex] =useState(0)
  const dispatch = useDispatch()

  const state=useSelector(state=>({
    banners:state.getIn(['recommend','topBanners'])
  }),shallowEqual)
  const bannerRef = useRef()
  useEffect(()=>{
    dispatch(getBanner());
  },[dispatch])

  const bannerChange=useCallback((from,to)=>{
    setTimeout(() => {
      setCurrentIndex(from)
    }, 0);
  },[])
  console.log(state)
  const bgImage=state.banners[currentIndex] && (state.banners[currentIndex].imageUrl+"?imageView&blur=40x20")

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay effect="fade" beforeChange={bannerChange} ref={bannerRef}>
            {
              state.banners.map((item,index)=>{
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
        </BannerRight>
        <BannerControl className='control'>
          <div className='btn left' onClick={e=>bannerRef.current.prev()}></div>
          <div className='btn right' onClick={e=>bannerRef.current.next()}></div>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})