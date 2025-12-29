import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function Button({ title, className }) {
  return (
    <button
      className={`cursor-pointer bg-primaryOrenge text-[14px] px-2 md:px-6 py-2 md:py-0 font-semibold md:font-bold font-publicSans md:leading-12 flex items-center gap-0.5 md:gap-3 rounded-xs uppercase ${className}`}
    >
      {title}
      <FaArrowRightLong />
    </button>
  );
}

export default Button;
