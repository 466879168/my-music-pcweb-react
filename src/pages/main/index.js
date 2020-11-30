import React ,{memo,Suspense} from 'react';

import {HashRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'

import routes from '@/router'

import MYAppHeader from '@/components/app-header'
import MYAppFooter from '@/components/app-footer'



export default memo(function MYMain(){
  return (
    <HashRouter>
      <MYAppHeader />
      <Suspense fallback={<div>loading</div>}>
        {renderRoutes(routes)}
      </Suspense>
      <MYAppFooter />
    </HashRouter>
  )
})