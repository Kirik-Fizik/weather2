import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton1 = () => (
    <ContentLoader 
    speed={1}
    width={800}
    height={200}
    backgroundColor="rgb(197, 197, 197)"
  >
    
    <rect x="100" y="0" rx="5" ry="5" width="400" height="100" /> 
  </ContentLoader>
);


export default Skeleton1;