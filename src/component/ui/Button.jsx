import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
function Button({ title, className }) {
  return (
    <button
      className={`cursor-pointer bg-primaryOrenge text-[14px] px-6 font-bold font-publicSans leading-12 flex items-center gap-3 rounded-xs uppercase ${className}`}
    >
      {title}
      <FaArrowRightLong />
    </button>
  );
}

export default Button;
