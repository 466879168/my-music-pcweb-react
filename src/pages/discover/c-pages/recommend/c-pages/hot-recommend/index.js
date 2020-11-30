import React,{useEffect,memo,useCallback} from 'react'

import {useDispatch,useSelector,shallowEqual} from 'react-redux'

import {getRecommend} from '../../store/actionCreators'

import {RecommendWrapper} from './style'

