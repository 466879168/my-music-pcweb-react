import React from 'react'
import {Redirect} from 'react-router-dom'

// import MYDiscover from '@/pages/discover'
// import MYFriend from '@/pages/friend'
// import MYMine from '@/pages/mine'
// import MYRecommend from '@/pages/discover/c-pages/recommend'


const MYDiscover=React.lazy(_=>import("../pages/discover"))
const MYRecommend=React.lazy(_=>import("../pages/discover/c-pages/recommend"))


const MYFriend=React.lazy(_=>import("../pages/friend"))
const MYMine=React.lazy(_=>import("../pages/mine"))




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
    component:MYDiscover,
    routes:[
      {
        path:'/discover',
        exact:true,
        render:()=>(
          <Redirect to="/discover/recommend" />
        )
      },
      {
        path:'/discover/recommend',
        component:MYRecommend
      }
    ]
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