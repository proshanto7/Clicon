import React from "react";
import Image from "../ui/Image";

function Product({ item, key }) {
  let { title, price, img } = item;

  return (
    <div
      key={key}
      className="max-w-78 border border-textColor/20 mb-4 flex gap-4 items-center justify-between rounded-[3px] p-3 hover:bg-warning/60 duration-300 cursor-pointer"
    >
      <div>
        <Image imgUrl={img} alt="img" className="scale-[1.2]" />
      </div>

      <div>
        <h6 className="text-[14px] font-normal leading-5 text-textColor mb-2">
          {title}
        </h6>
        <strong className="text-primary text-[14px] font-semibold">
          $ {price}
        </strong>
      </div>
    </div>
  );
}

export default Product;
