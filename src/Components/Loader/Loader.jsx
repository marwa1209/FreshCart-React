/** @format */

import React from "react";
import { BallTriangle } from "react-loader-spinner";
export default function Loader() {
  return (
    <>
      {/* loader */}
      <div className="flex justify-center my-36">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  );
}
