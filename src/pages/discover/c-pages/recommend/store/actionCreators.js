import * as actionTypes from './consttants'

import {
  getTopBanners,
  getHotRecommend,
  getNewAlbum,
  getTopList,
  getArtistList
} from '@/services/recommend'


const changeBannerAction=(res)=>({
  type:actionTypes.CHANGE_TOP_BANNER,
  banners:res.banners
})


const changeRecommendAction=(res)=>({
  type:actionTypes.CHANGE_HOT_RECOMMEND,
  recommends:res.result
})

const changeNewAlbumAction=(res)=>({
  type:actionTypes.CHANGE_NEW_ALBUM,
  newAlbums:res.result
})

const changeUpListAction=(res)=>({
  type:actionTypes.CHANGE_UP_LIST,
  topUpList:res.playlist
})

const changeNewListAction=(res)=>({
  type:actionTypes.CHANGE_NEW_LIST,
  tooNewList:res.playlist
})

const changeOriginListAction=(res)=>({
  type:actionTypes.CHANGE_ORIGIN_LIST,
  topOriginList:res.playlist
})

const changeSettleSingsAction=(res)=>({
  type:actionTypes.CHANGE_SETTLE_SONGER,
  settleSings:res.artists
})

export const getBanner=()=>{
  return dispatch=>{
    getTopBanners().then(res=>{
      dispatch(changeBannerAction(res))
    })
  }
}


export const getRecommend=()=>{
  return dispatch=>{
    getHotRecommend().then(res=>{
      dispatch(changeRecommendAction(res))
    })
  }
}

export const getAlbums=()=>{
  return dispatch=>{
    getNewAlbum().then(res=>{
      dispatch(changeNewAlbumAction(res))
    })
  }
}



export const getTopData=(idx)=>{
  return dispatch=>{
    getTopList(idx).then(res=>{
      switch(idx){
        case 0:
          dispatch(changeNewAlbumAction(res))
          break;
        case 2:
          dispatch(changeOriginListAction(res))
          break;
        case 3:
          dispatch(changeUpListAction(res))
          break;
        default:
          console.log('其他数据处理')
      }
    })
  }
}


export const getSettleSingers=()=>{
  return dispatch=>{
    getArtistList(5,5001).then(res=>{
      dispatch(changeSettleSingsAction(res))
    })
  }
}
