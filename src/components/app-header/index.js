import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { HeaderWrapper, HeaderRight, HeaderLeft } from "./style";
import {headerLinks} from '@/services/local-data'
import {Input} from 'antd'
import { SearchOutlined } from "@ant-design/icons";
import classnames from 'classnames'

export default memo(function MYAppHeader() {

  const showItem=(item,index)=>{
    if(index<3){
      return (
        <NavLink to={item.link} exact>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    }else{
      return (
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="select-list">
            {
              headerLinks.map((item,index)=>{
                return (
                  <div className={classnames("select-item")} key={item.title}>
                    {showItem(item,index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">
            创作者中心
          </div>
          <div>
            登录
          </div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
