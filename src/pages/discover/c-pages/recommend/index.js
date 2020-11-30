import React, { memo } from "react";

import {
  RecommendWrapper,
  RecommendLeft,
  RecommendRight,
  Content,
} from "./style";

import TopBanner from "./c-pages/top-banner";

export default memo(function MYRecommend() {
  return (
    <div>
      <RecommendWrapper>
        <TopBanner />
        <Content className="wrap-v2">
          <RecommendLeft>

          </RecommendLeft>
          <RecommendRight>
            
          </RecommendRight>
        </Content>
      </RecommendWrapper>
    </div>
  );
});
