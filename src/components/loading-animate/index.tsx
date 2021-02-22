import React from "react";
import Logo from "./Spinner.gif";
import * as E from "./elements";


const LoadingAnimate = () => {
  return (
    <E.LoadingWrapper>
      <img src={Logo} alt="loading..."/>
    </E.LoadingWrapper>
  );
};

export default LoadingAnimate;
