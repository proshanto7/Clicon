import { PiPackageDuotone } from "react-icons/pi";

function FeaturesItem({ item }) {
  let { icon, info1, info2 } = item;

  return (
    <div className=" flex text-lightGray  items-center gap-4 py-8.5 px-8 hover:bg-primaryOrenge hover:text-white duration-300 cursor-pointer rounded-md">
      <div className="text-[40px] ">{icon}</div>
      <div>
        <h6 className="text-[14px] font-medium leading-5  uppercase mb-1 ">
          {info1}
        </h6>
        <p className="text-[14px] font-normal leading-5 text-lightGray/90">
          {info2}
        </p>
      </div>
    </div>
  );
}

export default FeaturesItem;
