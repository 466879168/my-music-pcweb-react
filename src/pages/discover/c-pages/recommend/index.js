import React, { memo } from "react";

import {
  RecommendWrapper,
  RecommendLeft,
  RecommendRight,
  Content,
} from "./style";

import TopBanner from "./c-pages/top-banner";
import MYHotRecommend from './c-pages/hot-recommend'

export default memo(function MYRecommend() {
  return (
    <div>
      <RecommendWrapper>
        <TopBanner />
        <Content className="wrap-v2">
          <RecommendLeft>
          <MYHotRecommend/>
          </RecommendLeft>
          <RecommendRight>

          </RecommendRight>
        </Content>
      </RecommendWrapper>
    </div>
  );
});
