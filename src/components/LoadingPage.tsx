import React from "react";
import ReactLoading from "react-loading";

import * as S from "@styles/Components/LoadingPage";

const LoadingPage: React.FC = () => {
  return (
    <S.Container>
      <ReactLoading
        type="spinningBubbles"
        color="#0565FF"
        height={50}
        width={50}
      />
    </S.Container>
  );
};

export default LoadingPage;
