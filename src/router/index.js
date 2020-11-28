import React from 'react'
import {Redirect} from 'react-router-dom'

import MYDiscover from '@/pages/discover'
import MYFriend from '@/pages/friend'
import MYMine from '@/pages/mine'

const routes=[
  {
    path:"/",
    exact:true,
    render:()=>(
      <Redirect to="/discover" />
      )
  },
  {
    path:"/discover",
    component:MYDiscover
  },
  {
    path:"/mine",
    component:MYMine
  },
  {
    path:"/friend",
    component:MYFriend
  }
]

export default routes