import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={444}
      viewBox="0 0 300 444"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="14" y="6" rx="15" ry="15" width="274" height="274" />
      <rect x="80" y="308" rx="10" ry="10" width="142" height="17" />
      <rect x="40" y="345" rx="10" ry="10" width="227" height="22" />
      <rect x="172" y="398" rx="30" ry="30" width="115" height="36" />
      <rect x="17" y="399" rx="15" ry="15" width="90" height="36" />
    </ContentLoader>
  );
}

export default LoadingBlock;
