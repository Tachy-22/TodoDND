import React from 'react'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  return (
    <div>
      <Skeleton height={40} />
    </div>
  );
}

export default loading