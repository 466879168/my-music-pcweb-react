import React ,{memo} from 'react'
import {HashRouter} from 'react-router-dom'

import {renderRoutes} from 'react-router-config'


import MYAppHeader from '@/components/app-header'
import MYAppFooter from '@/components/app-footer'
import routes from './router'

export default memo(function App (){
  return (
    <HashRouter>
      <MYAppHeader />
      {renderRoutes(routes)}
      <MYAppFooter />
    </HashRouter>
  )
})
