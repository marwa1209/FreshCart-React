/** @format */

import React from "react";
import notfoundimg from "../../assets/images/error.svg";
export default function NotFound() {
  return (
    <>
      <picture className="notfound">
        <img src={notfoundimg} alt="NotFound" className="w-full" />
      </picture>
    </>
  );
}
